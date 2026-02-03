<script lang="ts">
 export let href: string | undefined;
 export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
 export let className: string = '';

 const baseClass = "font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center";

 const variantClasses = {
     primary: "bg-aero-800 text-white hover:bg-brand",
     secondary: "bg-aero-100 text-brand hover:bg-aero-200 hover:text-aero-700",
 };

 $: fullClass = `${baseClass} ${variantClasses[variant]} ${className}`.trim();
</script>

{#if href}
    <a {href} class={fullClass} {...$$restProps}>
        <slot />
    </a>
{:else}
    <button class={fullClass} {...$$restProps}>
        <slot />
    </button>
{/if}
