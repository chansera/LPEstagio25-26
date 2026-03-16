<script lang="ts">
 import ContactLink from '$lib/components/atoms/ContactLink/ContactLink.svelte';
 type Contato = {
     name: string;
     numero: string;
 }
 let contatos: Contato[] = $props();
</script>
<div class="hidden md:block bg-black border-b border-gray-200 text-xs py-2">
    <div class="container mx-auto px-4 flex justify-end items-center gap-6 text-white font-medium tracking-wide">
        {#each contatos as contato }
            <ContactLink numero={contato.numero} contactName=ccontato.name}/>
        {/each
    </div>
</div>
