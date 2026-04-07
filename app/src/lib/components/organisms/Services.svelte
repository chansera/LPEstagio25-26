<script lang="ts">
  import { CONTATOS } from "$lib/constants";
  import { SERVICES } from "$lib/data/services";
  import { formatWhatsAppLink } from '$lib/utils/whatsapp';
  import { page } from '$app/state';
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4">
  {#each SERVICES as service}
    <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 relative flex flex-col">
      {#if service.featured}
        <span class="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow">
          Destaque
        </span>
      {/if}
      <img
        src={service.image}
        alt={service.image_alt}
        loading="lazy"
        class="w-full h-56 object-cover"
      />
      <div class="p-4 flex flex-col flex-grow">
        <h3 class="text-xl font-semibold text-gold-rich mb-2">{service.title}</h3>
        <p class="text-sm text-aero-800 leading-relaxed mb-4 flex-grow">{service.description}</p>
        <a
          target="_blank"
          class="text-base font-semibold text-gold-rich hover:underline inline-flex items-center gap-1"
          href="{formatWhatsAppLink(CONTATOS.financeiro.numero)}?text={encodeURIComponent(`Olá, tenho interesse no serviço: ${service.title} - Link: ${page.url.href}`)}"
        >
          Solicitar um Orçamento →
        </a>
      </div>
    </div>
  {/each}
</div>
