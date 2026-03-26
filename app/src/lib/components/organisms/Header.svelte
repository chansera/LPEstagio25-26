<script lang="ts">
 import { slide } from 'svelte/transition';
 import { page } from '$app/state';
 import { SITE_ROUTES, CONTATOS, getContatosArray } from '$lib/constants';
 import logoImg from '$lib/assets/logo.png';
 import Button from '$lib/components/atoms/Button/Button.svelte';
 import BlackStrip from '$lib/components/molecules/BlackStrip/BlackStrip.svelte';
 import Logo from '../atoms/Logo/Logo.svelte';
 import PhoneSvg from '../atoms/PhoneSvg.svelte';
 import { formatWhatsAppLink } from '$lib/utils/whatsapp';

 let isMenuOpen = $state(false);

 function toggleMenu() {
     isMenuOpen = !isMenuOpen;
 }

 function closeMenu() {
     isMenuOpen = false;
 }

 let contatos = getContatosArray()
 let currentPath = $derived(page.url.pathname);

 function isActive(href: string): boolean {
     if (href === '/' && currentPath === '/') return true;
     if (href !== '/' && currentPath.startsWith(href)) return true;
     return false;
 }


 let baseClass = "sticky top-0 z-50  p-3 border-1 border-aero-50";
 let glass = "bg-white/30 backdrop-blur-sm border-aero-50/20 shadow-lg";
 // 1. Estado reativo para controlar a classe de estilo
  let scrolled = $state(false);

  // 2. Efeito colateral para gerenciar o event listener
  $effect(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 20;
    };

    // Adiciona o listener com opção de performance
    window.addEventListener('scroll', onScroll, { passive: true });

    // Função de limpeza (cleanup) executada automaticamente
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  });

</script>

<BlackStrip contatos={contatos}/>
<header id="main-header" class={`${baseClass} ${scrolled? glass : 'bg-aero-50'}`}>
    <div class="container mx-auto px-8 flex justify-between items-center">

        <Logo src={logoImg} />

        <nav class="hidden md:flex items-center gap-6">
            {#each SITE_ROUTES as link}
                <a
                    href={link.href}
                    class="group relative inline-block text-brand transition-colors hover:text-brand
                         {isActive(link.href) ? 'font-semibold text-brand' : ''}"
                    aria-current={isActive(link.href) ? 'page' : undefined}
                >
                    {link.name}
                    {#if !isActive(link.href)}
                        <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full"></span>
                    {:else}
                        <span class="absolute bottom-0 left-0 h-0.5 w-full bg-brand"></span>
                    {/if}
                </a>
            {/each}
        </nav>

        <div class="hidden md:block">
            <Button href={formatWhatsAppLink(CONTATOS.financeiro.numero)} variant="primary">
                <PhoneSvg/>
                <span>Solicitar Orçamento</span>
            </Button>
        </div>

        <!-- Botão Mobile -->
        <button
            class="md:hidden text-aero-700 hover:text-brand focus:outline-none p-2"
            onclick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Menu"
        >
            <div class="w-6 h-6 flex flex-col justify-center gap-1">
                <span class="block w-full h-0.5 bg-current transition-all duration-300 {isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}"></span>
                <span class="block w-full h-0.5 bg-current transition-all duration-300 {isMenuOpen ? 'opacity-0' : 'opacity-100'}"></span>
                <span class="block w-full h-0.5 bg-current transition-all duration-300 {isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}"></span>
            </div>
        </button>
    </div>

    <!-- Menu Mobile Dropdown -->
    {#if isMenuOpen}
        <div
        class="md:hidden absolute top-full left-0 bg-aero-900/80 backdrop-blur-lg w-full py-4 px-4 flex flex-col gap-2 z-50"
            transition:slide={{ duration: 300 }}
            style="max-height: calc(100vh - 80px); overflow-y: auto;"
        >
            <nav class="flex flex-col items-center gap-6 mb-8">
                {#each SITE_ROUTES as link}
                    <a
                        href={link.href}
                        class="group relative inline-block text-brand transition-colors hover:text-brand
                             {isActive(link.href) ? 'font-semibold text-brand' : ''}"
                        aria-current={isActive(link.href) ? 'page' : undefined}
                        onclick={closeMenu}
                    >
                        {link.name}
                        {#if !isActive(link.href)}
                            <span class="absolute bottom-0 left-0 h-0.5 w-0 bg-brand transition-all duration-300 group-hover:w-full"></span>
                        {:else}
                            <span class="absolute bottom-0 left-0 h-0.5 w-full bg-brand"></span>
                        {/if}
                    </a>
                {/each}
            </nav>

            <div class="border-t border-gray-100 w-full pt-6 mt-auto">
            <Button href={formatWhatsAppLink(CONTATOS.financeiro.numero)} variant="secondary">
                <PhoneSvg/>
                <span>Solicitar Orçamento</span>
            </Button>
            </div>
        </div>
    {/if}
</header>
