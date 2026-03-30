<script lang="ts">
  // Import images (Vite resolves these to URLs)
  import componentes from '../assets/componentes.webp';
  import ensaiosNaoD from '../assets/ensaiosNaoD.webp';
  import afericao from '../assets/afericao.webp';
  import pesagem from '../assets/pesagem.webp';
  import sistemaCombustivel from '../assets/sistema_combustivel.webp';
  import importacaoPecas from '../assets/importacao_pecas.webp';
  import rvsm from '../assets/RVSM.webp';
  import boroscopia from '../assets/boroscopia.webp';
  import usinagem from '../assets/usinagem.webp';
  import inspecaoDimensional from '../assets/inspecao_dimensional.webp';
  import rtmm from '../assets/RTMM.webp';
  import ferramentas from '../assets/ferramentas.webp';

  // Type-safe mapping
  type ImageMap = Record<string, string>;

  const imageMap: ImageMap = {
    '/componentes.webp': componentes,
    '/ensaiosNaoD.webp': ensaiosNaoD,
    '/afericao.webp': afericao,
    '/pesagem.webp': pesagem,
    '/sistema_combustivel.webp': sistemaCombustivel,
    '/importacao_pecas.webp': importacaoPecas,
    '/RVSM.webp': rvsm,
    '/boroscopia.webp': boroscopia,
    '/usinagem.webp': usinagem,
    '/inspecao_dimensional.webp': inspecaoDimensional,
    '/RTMM.webp': rtmm,
    '/ferramentas.webp': ferramentas,
  };

  // Define props with Svelte 5 runes
  interface Props {
    imagePath: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  }

  let { imagePath, alt, width = 400, height = 300, className = '' }: Props = $props();

  // Get the actual image URL or undefined
  const imageSrc: string | undefined = imageMap[imagePath];
</script>

{#if imageSrc}
  <img
    src={imageSrc}
    alt={alt}
    width={width}
    height={height}
    class={`w-full h-48 object-cover ${className}`}
    loading="lazy"
  />
{:else}
  <div class="w-full h-48 bg-gray-200 flex items-center justify-center">
    <span class="text-gray-500">Imagem não encontrada: {imagePath}</span>
  </div>
{/if}
