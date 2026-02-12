<script lang="ts">
    import type { LogoProps } from './Logo.type';

    let {
        logoImg,
        local,
        descricao = 'Logo da D.A Aviação',
        baseClass = 'h-12 w-auto'
    }: LogoProps = $props();

    const spanColor = $derived(local === 'footer' ? 'text-gold-rich group-hover:text-gold-light' : 'text-gray-900 group-hover:text-brand');
</script>

<a href="/" class="flex items-center gap-3 group" aria-label="Página inicial">
    <div class="transform transition-transform duration-300 group-hover:scale-105">
        <img src={logoImg} alt={descricao} class={baseClass} />
    </div>

    <div class="flex flex-col">
        <span
            class="text-xl font-bold tracking-tight leading-none transition-colorsw {spanColor}"
        >
            D.A Aviação
        </span>
        <span class="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-300">
            Manutenção
        </span>
    </div>
</a>
