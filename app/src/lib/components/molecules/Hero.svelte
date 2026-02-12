<script lang="ts">
 import LinkButton from '$lib/components/atoms/Buttons/LinkButton/LinkButton.svelte';
 import painelImg from '$lib/assets/painel.webp';
 import { SITE_INFO } from '$lib/constants';
</script>

<section>
    <div class="container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1  lg:grid-cols-2 gap-8 m-auto lg:gap-12 items-center py-12 lg:py-24">

            <!-- Conteúdo -->
            <div class="flex flex-col justify-center p-6 md:p-12 lg:p-16 transition-all duration-700 delay-200">
                <div class="space-y-2">
                    <div class="inline-flex items-center gap-2 mb-4">
                        <span class="text-sm font-medium text-gold-rich">Oficina Aprovada ANAC</span>
                        <span class="text-gray-300">•</span>
                        <span class="text-sm text-aero-700">Atuando desde 1997</span>
                    </div>

                    <h1 class="text-2xl font-extrabold text-aero-800 tracking-tight md:text-4xl">
                        Manutenção de Componentes Aeronáuticos.
                    </h1>
                    <p class="text-base text-gold-rich md:text-xl">
                        (O.M) com Precisão Certificada.
                    </p>
                </div>

                <p class="mt-2 max-w-xl text-base md:text-lg text-aero-950">
                    Elevamos a segurança e a performance da sua frota com serviços homologados pelos mais altos padrões da aviação global.
                </p>

                <div class="mt-4 border-l-4 border-brand pl-4 py-2">
                    <p class="font-semibold text-gold-rich">Homologação ANAC, FAA e EASA.</p>
                    <p class="text-sm text-aero-800">Sua tranquilidade é a nossa maior prioridade.</p>
                </div>

                <div class="mt-10 flex flex-col sm:flex-row items-start gap-4">
                    <LinkButton variant="primary" href="/servicos">Nossos Serviços</LinkButton>
                    <LinkButton variant="secondary"
                            href="https://wa.me/{SITE_INFO.regina}"
                            target="_blank">
                        Fale com um especialista &rarr;
                    </LinkButton>
                </div>
            </div>

            <!-- Imagem -->
            <div class="relative sm:order-1">
                <div class="lg:block rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        src={painelImg}
                        alt="Painel de componentes aeronáuticos em manutenção"
                        class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>
            </div>

        </div>
    </div>
</section>
