<script lang="ts">
 import type {Props} from './Logo.type';
 let { src, alt, nameClass, loading}: Props = $props();
 nameClass = "h-12 w-auto"
 alt = "Logo da D.A Aviação"
 loading = "lazy";
</script>
<div class="transform transition-transform group-hover:scale-105 duration-300">
</div>
<a href="/" class="flex items-center group gap-3">
    <div class="transform transition-transform group-hover:scale-105 duration-300">
        <img
            src={src}
            alt={alt}
            class={nameClass}
            loading={loading}
        />
    </div>
    <div class="flex flex-col">
        <span class="text-xl font-bold text-gray-500 tracking-tight leading-none group-hover:text-brand transition-colors">
            D.A Aviação
        </span>
        <span class="text-[0.65rem] uppercase tracking-widest text-gray-500 font-semibold">
            Manutenção
        </span>
    </div>
</a>
