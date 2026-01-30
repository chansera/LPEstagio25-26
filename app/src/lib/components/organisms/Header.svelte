<script lang="ts">
 import logoImg from '$lib/assets/logo.png';
 import { SITE_INFO, SITE_ROUTES,ACTIVE_PATH_PATTERNS } from '$lib/constants';
 import Button from '$lib/components/atoms/Button.svelte';
</script>


<div class="hidden md:block bg-black border-b border-gray-200 text-xs py-2">
    <div class="container mx-auto px-4 flex justify-end items-center gap-6 text-white font-medium tracking-wide">
        <a href="https://wa.me/5518997831844" target="_blank" class="flex items-center gap-2 hover:text-brand transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            (18) 99783-1844
        </a>
        <a href="https://wa.me/5518997450646" target="_blank" class="flex items-center gap-2 hover:text-brand transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            (18) 99745-0646
        </a>
        <a href="mailto:d.a.aviacao@terra.com.br" class="flex items-center gap-2 hover:text-brand transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            d.a.aviacao@terra.com.br
        </a>
    </div>
</div>

<header id="main-header" class="sticky top-0 z-50 bg-white transition-all duration-300 border-b border-gray-100">

    <div class="container mx-auto px-4 h-20 flex justify-between items-center">

        <a href="/" class="flex items-center group gap-3 z-50 relative">
            <div class="transform transition-transform group-hover:scale-105 duration-300">
                <img
                    src={logoImg}
                    alt="Logo da D.A Aviação"
                    class="h-8 w-auto sm:h-12"
                />
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
        <nav class="hidden md:flex items-center gap-8 lg:mr-32">
            {#each SITE_ROUTES as link}
                <a
                    href={link.href}
                    class="nav-link text-sm font-semibold text-gray-600 hover:text-brand transition-all relative py-2
                         {ACTIVE_PATH_PATTERNS === link.href ? 'text-brand' : 'text-gray-500 hover:text-brand'}"
                >
                    {link.name}
                    {#if ACTIVE_PATH_PATTERNS === link.href}
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
                    {/if}
                </a>
            {/each}
        </nav>

        <div class="hidden md:block">
            <Button href="/contato">Orçamento</Button>
        </div>

        <button id="mobile-btn" class="md:hidden z-50 text-gray-700 hover:text-brand focus:outline-none p-2 rounded-md">
            <div class="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span class="hamburger-line block w-full h-0.5 bg-current transition-all duration-300"></span>
                <span class="hamburger-line block w-full h-0.5 bg-current transition-all duration-300"></span>
                <span class="hamburger-line block w-full h-0.5 bg-current transition-all duration-300"></span>
            </div>
        </button>
    </div>

    <div id="mobile-menu" class="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transform translate-x-full transition-transform duration-300 md:hidden flex flex-col items-center justify-center space-y-8">
        <nav class="hidden md:flex items-center gap-8 lg:mr-32">
            {#each SITE_ROUTES as link}
                <a
                    href={link.href}
                    class="nav-link text-sm font-semibold text-gray-600 hover:text-brand transition-all relative py-2
                         {ACTIVE_PATH_PATTERNS === link.href ? 'text-brand' : 'text-gray-500 hover:text-brand'}"
                >
                    {link.name}
                    {#if ACTIVE_PATH_PATTERNS === link.href}
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
                    {/if}
                </a>
            {/each}
        </nav>
    </div>
</header>
