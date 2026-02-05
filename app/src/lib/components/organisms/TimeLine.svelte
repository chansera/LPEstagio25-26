<script>
  import { timelineData } from '$lib/constants/timeLineData';
</script>

<div class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="relative">
      <!-- Linha vertical central - apenas no desktop -->
      <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

      <div class="space-y-8 md:space-y-0">
        {#each timelineData as item, index}
          <!-- Container do item -->
          <div class="relative flex flex-col md:flex-row items-center">
            <!-- Ponto na linha (sempre centralizado) -->
            <div class="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none flex items-center justify-center w-6 h-6 rounded-full bg-white border-4 border-[#bfa15f] z-10"></div>

            <!-- Conteúdo à esquerda (para itens pares) e à direita (para itens ímpares) -->
            <div class="md:w-1/2 {index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'} mt-4 md:mt-0">
              <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div class="text-sm font-semibold text-[#bfa15f]">{item.year}</div>
                <div class="text-lg font-bold text-gray-900 mt-2">{item.title}</div>
                <div class="text-gray-600 mt-2">{item.description}</div>
              </div>
            </div>

            <!-- Espaço vazio para alternar -->
            <div class="md:w-1/2 {index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} hidden md:block">
              <!-- Se quiser, pode colocar algo aqui, como o ano grande, mas optei por deixar vazio para simplicidade -->
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
