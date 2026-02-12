<script lang="ts">
 import type { Coluna } from './ColunaFooter.type';
 let { children, tipo }: Coluna = $props();
</script>

<div class="flex flex-col items-center md:items-start text-center md:text-left">
    <h4 class="font-bold text-white text-lg mb-6">{tipo}</h4>
        {@render children()}
</div>
