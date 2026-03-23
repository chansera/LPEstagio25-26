<script lang="ts">
 import ContactLink from '$lib/components/atoms/ContactLink/ContactLink.svelte';
 import { formatWhatsAppLink } from '$lib/utils/whatsapp';
 type Contato = {
     href: string;
     name: string;
     numero: string;
 }
let { contatos }: { contatos: Contato[] } = $props();
</script>
<div class="hidden md:block bg-aero-800 border-b border-gray-200 text-xs py-2">
    <div class="container mx-auto px-4 flex justify-end items-center gap-6 text-white font-medium tracking-wide">
        {#each contatos as contato }
            <ContactLink href={formatWhatsAppLink(contato.numero)} numero={contato.numero} contactName={contato.name}/>
        {/each}
    </div>
</div>
