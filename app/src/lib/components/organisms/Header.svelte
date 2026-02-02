<script lang="ts">
 import logoImg from '$lib/assets/logo.png';
 import { SITE_INFO, SITE_ROUTES } from '$lib/constants';
 import Button from '$lib/components/atoms/Button.svelte';
 import { slide } from 'svelte/transition';
 import { page } from '$app/stores';

 let isMenuOpen = false;

 function toggleMenu() {
     isMenuOpen = !isMenuOpen;
 }

 function closeMenu() {
     isMenuOpen = false;
 }
</script>

<div class="hidden md:block bg-black border-b border-gray-200 text-xs py-2">
    <div class="container mx-auto px-4 flex justify-end items-center gap-6 text-white font-medium tracking-wide">
        <a href="https://wa.me/{SITE_INFO.regina}" target="_blank" class="flex items-center gap-2 hover:text-brand transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            (18) 99783-1844 (Regina)
        </a>
        <a href="https://wa.me/{SITE_INFO.financeiro}" target="_blank" class="flex items-center gap-2 hover:text-brand transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            (18) 99745-0646 (Financeiro)
        </a>
        <a href="mailto:{SITE_INFO.email}" class="flex items-center gap-2 hover:text-brand transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            {SITE_INFO.email}
        </a>
    </div>
</div>

<header id="main-header" class="sticky top-0 z-50 bg-white transition-all duration-300 border-b border-gray-100">
    <div class="container mx-auto px-4 h-20 flex justify-between items-center">
        <a href="/" class="flex items-center group gap-3">
            <div class="transform transition-transform group-hover:scale-105 duration-300">
                <img src={logoImg} alt="Logo da D.A Aviação" class="h-8 w-auto sm:h-12" />
            </div>
            <div class="flex flex-col">
                <span class="text-xl font-bold text-gray-900 tracking-tight leading-none group-hover:text-brand transition-colors">
                    D.A Aviação
                </span>
                <span class="text-[0.65rem] uppercase tracking-widest text-gray-500 font-semibold">
                    Manutenção
                </span>
            </div>
        </a>

        <!-- Navegação desktop -->
        <nav class="hidden md:flex items-center gap-8">
            {#each SITE_ROUTES as link}
                <a
                    href={link.href}
                    class="text-sm font-semibold relative py-2 transition-colors
                         {$page.url.pathname === link.href
                         ? 'text-brand'
                         : 'text-gray-600 hover:text-brand'}"
                >
                    {link.name}
                    {#if $page.url.pathname === link.href}
                        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand rounded-full"></span>
                    {/if}
                </a>
            {/each}
        </nav>

        <div class="hidden md:block">
            <Button href="https://wa.me/{SITE_INFO.financeiro}" target="_blank" variant="primary">Orçamento</Button>
        </div>

        <button
            class="md:hidden text-gray-700 hover:text-brand focus:outline-none p-2"
            on:click={toggleMenu}
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
                        class="text-xl font-semibold py-2 transition-colors text-center
                             {$page.url.pathname === link.href
                             ? 'text-brand'
                             : 'text-gray-800 hover:text-brand'}"
                        on:click={closeMenu}
                    >
                        {link.name}
                        {#if $page.url.pathname === link.href}
                            <span class="block w-10 h-0.5 bg-brand mx-auto mt-1 rounded-full"></span>
                        {/if}
                    </a>
                {/each}
            </nav>

            <div class="border-t border-gray-100 w-full pt-6 mt-auto">
                <Button href="https://wa.me/{SITE_INFO.financeiro}" target="_blank" variant="primary" class="w-full" on:click={closeMenu}>
                    Orçamento
                </Button>
            </div>
        </div>
    {/if}
</header>
