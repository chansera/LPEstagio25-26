<script lang="ts">
 import { slide } from 'svelte/transition';
 import { page } from '$app/state';
 import { SITE_ROUTES, CONTATOS } from '$lib/constants';
 import logoImg from '$lib/assets/logo.png';
 import Button from '$lib/components/atoms/Button.svelte';
 import BlackStrip from '$lib/components/molecules/BlackStrip/BlackStrip.svelte';

 let isMenuOpen = $state(false);

 function toggleMenu() {
     isMenuOpen = !isMenuOpen;
 }

 function closeMenu() {
     isMenuOpen = false;
 }

 let currentPath = $derived(page.url.pathname);

 function isActive(href: string): boolean {
     if (href === '/' && currentPath === '/') return true;
     if (href !== '/' && currentPath.startsWith(href)) return true;
     return false;
 }
</script>

<BlackStrip contatos{Object.values(CONTATOS)}/>
<header id="main-header" class="sticky top-0 z-50 bg-white transition-all duration-300 border-b border-gray-100">
    <div class="container mx-auto px-4 h-20 flex justify-between items-center">

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
            <Button href="https://wa.me/{CONTATOS.financeiro.numero}" target="_blank" variant="primary">Solicitar Orçamento</Button>
        </div>

        <!-- Botão Mobile -->
        <button
            class="md:hidden text-gray-700 hover:text-brand focus:outline-none p-2"
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
            class="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl py-4 px-4 flex flex-col gap-2 z-50"
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
                <Button href="https://wa.me/{CONTATOS.financeiro.numero}" variant="primary" className="w-full" >
                    Orçamento
                </Button>
            </div>
        </div>
    {/if}
</header>
