<script lang="ts">
    import type { LinkButtonProps, ButtonVariant } from './LinkButton.types';

    let { variant, arialabel = '', children, ...rest }: LinkButtonProps = $props();

    const baseClasses = "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg focus:outline-none focus:ring-4 transition-colors duration-200";

    const variants: Record<ButtonVariant, string> = {
        primary: "group bg-gold-gradient text-aero-950 font-bold px-8 py-4 rounded-lg hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-gold-base/20 hover:shadow-xl hover:shadow-gold-base/30",
        secondary: "border border-brand text-gold-dark shadow-md hover:shadow-lg hover:-translate-y-0.5",
        whatsapp: "bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg"
    };
</script>

<a
    class="{baseClasses} {variants[variant]}"
    aria-label={arialabel}
    {...rest}
>
    {@render children?.()}
</a>
