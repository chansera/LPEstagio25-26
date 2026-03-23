<script lang="ts">
    import logoImg from "$lib/assets/logo.png";
    import { SITE_ROUTES, getContatosArray } from "$lib/constants";
    import { page } from '$app/state';
    import Logo from "../atoms/Logo/Logo.svelte";
    import ContactLink from "../atoms/ContactLink/ContactLink.svelte";

    const currentYear = new Date().getFullYear();
    let contatos = getContatosArray();
    let currentPath = $derived(page.url.pathname);

    function isActive(href: string): boolean {
        if (href === '/' && currentPath === '/') return true;
        if (href !== '/' && currentPath.startsWith(href)) return true;
        return false;
    }
</script>

<footer class="bg-black border-t border-gold-glow text-gray-300 font-sans">
    <div class="container mx-auto px-6 py-16 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
            <!-- Coluna 1: Endereço e Logo -->
            <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div class="flex flex-col space-y-2 ml-4">
                    <h4 class="font-bold text-gray-50 uppercase text-lg tracking-widest mb-2">
                        Endereço
                    </h4>
                    <p class="text-gray-400 text-sm leading-relaxed">
                        Rua José Fonzar, 2263<br />
                        Jardim Recanto dos Pássaros<br />
                        Birigui - SP, 16201-137
                    </p>
                </div>

                <div class="flex items-center gap-2 pt-4">
                    <Logo src={logoImg} />
                    <a
                        href="https://www.instagram.com/d.aaviacao_/"
                        target="_blank"
                        aria-label="Instagram"
                        class="text-gray-400 hover:text-brand transition-transform hover:-translate-y-1"
                    >
                        <svg
                            class="w-8 h-8"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Coluna 2: Navegação -->
            <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <h4 class="font-bold text-gray-50 uppercase text-lg tracking-widest">
                    Navegação
                </h4>
                <nav class="flex flex-col space-y-4 text-sm w-full">
                    {#each SITE_ROUTES as link}
                        <a
                            href={link.href}
                            class="block text-gray-50 transition-colors hover:text-brand {isActive(link.href) ? 'font-semibold' : ''}"
                            aria-current={isActive(link.href) ? 'page' : undefined}
                        >
                            {link.name}
                        </a>
                    {/each}
                </nav>
            </div>

            <!-- Coluna 3: Canais de Atendimento -->
            <div class="flex flex-col  md:items-start text-center md:text-left space-y-4">
                <h4 class="font-bold text-gray-50 uppercase text-lg tracking-widest">
                    Canais de Atendimento
                </h4>
                <ul class="flex flex-col items-center md:items-start space-y-4 text-sm w-full pt-2">
                    {#each contatos as contato}
                        <li>
                            <ContactLink
                                href={contato.href}
                                numero={contato.numero}
                                contactName={contato.name}
                            />
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>

    <!-- Copyright -->
    <div class="bg-aero-950 border-t border-gold-glow py-6">
        <div
            class="container mx-auto px-4 flex flex-col items-center justify-center text-center space-y-2"
        >
            <p class="text-xs text-aero-100">
                &copy; {currentYear} D.A Aviação. Todos os direitos reservados.
            </p>
            <p class="text-xs text-gray-100">
                Precisão e segurança em manutenção aeronáutica.
            </p>
        </div>
    </div>
</footer>
