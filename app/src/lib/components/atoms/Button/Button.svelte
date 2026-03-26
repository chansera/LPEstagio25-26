<script lang="ts">
 import type { Props } from './Button.type'
 let { href, className, children, variant, target, rel,  ...rest }: Props = $props();

 const variants = {
     primary: "btn-secondary",
     secondary:"btn-primary",
     outline: "btn-outline"
 };

 const baseClass ="flex gap-2 w-full  h-16 font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-xl text-base sm:text-lg  items-center justify-center";
 const finalClass = $derived(`${baseClass} ${variants[variant]} ${className}`.trim());
</script>

{#if href}
    <a {href} class={finalClass} target="_blank" rel="noreferrer"  {...rest}>
        {@render children?.()}
    </a>
{:else}
    <button class={finalClass} {...rest}>
        {@render children?.()}
    </button>
{/if}
