<script lang="ts">
    import { SERVICES } from "$lib/data/services";

</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
  {#each SERVICES as service}
    <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 relative">
      {#if service.featured}
        <span class="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          Destaque
        </span>
      {/if}
      <img
        src={service.image}
        alt={service.image_alt}
        loading="lazy"
        class="w-full h-120 object-cover"
      />
      <div class="p-3">
        <h3 class="text-xl font-semibold text-gold-dark mb-2">{service.title}</h3>
        <p class="text-sm text-aero-800 leading-relaxed">{service.description}</p>
      </div>
    </div>
  {/each}
</div>
