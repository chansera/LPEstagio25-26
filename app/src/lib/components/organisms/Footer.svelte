<script lang="ts">
 import logo from '$lib/assets/logo.png';
 import {CONTACT_LIST} from '$lib/constants';
 import ContactList from '$lib/components/molecules/ContactList/ContactList.svelte';
 import ColunaFooter from '$lib/components/molecules/ColunaFooter/ColunaFooter.svelte';
 import Adress from '../atoms/Adress/Adress.svelte';
 import Logo from '../atoms/ui/Logo/Logo.svelte';
 import Instagram from '../atoms/Insagram/Instagram.svelte';
 const {currentYear = new Date().getFullYear()} = $props();
</script>

<footer class="bg-black border border-gold-glow text-gray-300 font-sans">
    <div class="container mx-auto px-6 py-16 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

            <div class="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                <Logo local='footer' logoImg={logo}/>
                <Adress/>
                <Instagram />
            </div>

            <ColunaFooter tipo="Navegação">
                <ul class="space-y-4 text-sm w-full">
                    <li><a href="/"  class="text-gray-400 hover:text-brand transition-colors">Início</a></li>
                    <li><a href="/servicos"  class="text-gray-400 hover:text-brand transition-colors">Serviços</a></li>
                    <li><a href="/sobre"  class="text-gray-400 hover:text-brand transition-colors">Sobre Nós</a></li>
                    <li><a href="/contato"  class="text-gray-400 hover:text-brand transition-colors">Contato</a></li>
                </ul>
            </ColunaFooter>
            <ColunaFooter tipo="Canais de Atendimento">
                <ContactList contacts= {CONTACT_LIST} />
            </ColunaFooter>
        </div>

    </div>
    <div class="bg-aero-950 border-t border-gold-glow py-6">
        <div class="container mx-auto px-4 flex flex-col items-center justify-center text-center space-y-2">
            <p class="text-xs text-aero-100">
                &copy; {currentYear} D.A Aviação. Todos os direitos reservados.
            </p>
            <p class="text-xs text-aero-100">
                Precisão e segurança em manutenção aeronáutica.
            </p>
        </div>
    </div>
</footer>
