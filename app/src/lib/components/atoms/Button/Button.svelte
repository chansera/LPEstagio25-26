<script lang="ts">
 import type { Props } from "./Button.type";
 let { href, className, children, variant, target, rel,  ...rest }: Props = $props();

 const variants = {
     primary: "bg-aero-800 text-white hover:bg-brand",
     secondary:"bg-aero-100 text-brand hover:bg-aero-200 hover:text-aero-700",
     outline: "border-1 border-brand text-aero-50"
 };

 const baseClass ="font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-xl text-base sm:text-lg hover:scale-[1.02] transition-all duration-300  hover:shadow-xl hover:shadow-gold-base/30 items-center justify-center";
 const finalClass = $derived(`${baseClass} ${variants[variant] || variants[variant = 'primary']} ${className}`.trim());
</script>

{#if href}
    <a {href} class={finalClass}  {...rest}>
        {@render children?.()}
    </a>
{:else}
    <button class={finalClass} {...rest}>
        {@render children?.()}
    </button>
{/if}
