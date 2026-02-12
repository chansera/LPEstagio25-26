<script lang="ts">
 import type { ContactProps } from './ContactLink.types';

let {
    label,
    value = "",
    tipo,
    baseClass  = " gap-2",
    labelClass = "text-aero-500 text-sm hover:text-gold-dark",
    valueClass = "text-aero-50 text-sm hover:text-aero-300"
 }: ContactProps = $props();

 // 1. Lógica para o LINK (Sempre limpo para o WhatsApp/Telefone funcionar)
 let href = $derived.by(() => {
     const safeValue = String(value || "");
     const clean = safeValue.replace(/\D/g, ''); // Remove tudo que não é número

     if (tipo === 'whatsapp') return `https://wa.me/${clean}`;
     if (tipo === 'tel') return `tel:${clean}`;
     return `mailto:${safeValue}`;
 });

 // 2. Lógica para EXIBIÇÃO (Coloca a máscara (18) 99999-9999)
 let displayValue = $derived.by(() => {
     const digits = String(value || "").replace(/\D/g, '');

     // Se for celular com DDI (Ex: 5518997831844)
     if (digits.length === 13 && digits.startsWith('55')) {
         return `(${digits.slice(2, 4)}) ${digits.slice(4, 9)}-${digits.slice(9)}`;
     }

     // Se for celular sem DDI (Ex: 18997831844)
     if (digits.length === 11) {
         return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
     }

     // Se for telefone fixo (Ex: 1836425048)
     if (digits.length === 10) {
         return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
     }

     return value; // Fallback: se não reconhecer o padrão, mostra como está
 });
</script>

<a
    href={href}
    target={tipo === 'whatsapp' ? '_blank' : undefined}
    rel={tipo === 'whatsapp' ? 'noopener noreferrer' : undefined}
    class="group transition-colors {baseClass}"
>
    <span class={labelClass}>{label}</span>
    <span class={valueClass}>{displayValue}</span>
</a>
