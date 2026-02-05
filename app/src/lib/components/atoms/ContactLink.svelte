<!-- lib/components/atoms/ContactLink.svelte -->
<script lang="ts">
  export let tipo: 'whatsapp' | 'email' = 'whatsapp';
  export let number: string;
  export let email: string;
  export let label: string;

  $: href = tipo === 'whatsapp'
    ? `https://wa.me/${number?.replace(/\D/g, '') || ''}`
    : `mailto:${email || ''}`;
</script>

<a
  href={href}
  target={tipo === 'whatsapp' ? '_blank' : undefined}
  rel={tipo === 'whatsapp' ? 'noopener noreferrer' : undefined}
  class="flex items-center gap-2 hover:text-brand transition-colors"
>
  {#if tipo === 'whatsapp'}
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  {:else}
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  {/if}
  <span>{label}</span>
</a>
