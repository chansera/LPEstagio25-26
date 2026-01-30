<script lang="ts">
  export let href: string | undefined;
  export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
  export let className: string = '';

  const baseClass = "font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center";

  const variantClasses = {
    primary: "bg-black text-white hover:bg-brand-dark",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
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
