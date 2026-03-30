<script lang="ts">
    import Button from "$lib/components/atoms/Button/Button.svelte";
    import { CONTATOS } from "$lib/constants";
    import { formatWhatsAppLink } from "$lib/utils/whatsapp";
    import SetaSvg from "../atoms/SetaSvg.svelte";
    let whatsRegina = formatWhatsAppLink(CONTATOS.comercial.numero);
</script>

<section
    class="bg-gradient-to-br from-aero-950 to-aero-900 py-20 lg:py-28 relative overflow-hidden"
>

    <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-base/5 via-transparent to-transparent"
    ></div>
    <div
        class="absolute top-10 right-10 w-64 h-64 bg-gold-base/5 rounded-full blur-3xl"
    ></div>
    <div
        class="absolute bottom-10 left-10 w-80 h-80 bg-aero-700/10 rounded-full blur-3xl"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
        <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-24"
        >
            <!-- Lado esquerdo: Texto e CTA -->
            <div class="space-y-8">
                <div>
                    <h2
                        class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    >
                        <span class="block text-aero-50"
                            >Sua frota não pode</span
                        >
                        <span class="text-gold-metal block">esperar.</span>
                    </h2>

                    <p
                        class="text-xl text-aero-300 mb-10 max-w-lg leading-relaxed"
                    >
                        Precisando de atendimento imediato? <br />
                        Nossa equipe está pronta para receber seu componente <span
                            class="text-gold-base font-semibold"
                            >imediatamente</span
                        >.
                    </p>
                </div>

                <!-- Botões -->
                <div class="flex flex-col sm:flex-row gap-5">
                    <Button
                        href={whatsRegina}
                        target="_blank"
                        variant="secondary"
                        className="group bg-gold-gradient  hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-gold-base/20 hover:shadow-xl hover:shadow-gold-base/30"
                    >
                        <span class="flex items-center gap-3">
                            Falar com Especialista
                            <SetaSvg/>
                        </span>
                    </Button>
                </div>

                <!-- Info rápida -->
                <div class="pt-6 border-t border-aero-800/50 mt-10">
                    <p class="text-sm text-aero-400 flex items-center gap-2">
                        <svg
                            class="w-5 h-5 text-gold-base"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span
                            >Resposta em até <strong class="text-gold-light"
                                >2 horas úteis</strong
                            ></span
                        >
                    </p>
                </div>
            </div>

            <!-- Lado direito: Card do endereço -->
            <div class="relative">
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-gold-base/20 to-transparent rounded-2xl blur-lg opacity-50"
                ></div>

                <div
                    class="relative bg-gradient-to-br from-aero-900 to-aero-800 border border-aero-700 rounded-2xl p-8 lg:p-10 shadow-2xl overflow-hidden"
                >
                    <!-- Decoração do card -->
                    <div
                        class="border border-gold-glow absolute top-0 right-0 w-32 h-32 bg-gold-base/5 rounded-full -translate-y-16 translate-x-16"
                    ></div>

                    <div class="relative space-y-8">
                        <!-- Cabeçalho -->
                        <div
                            class="flex items-start justify-between border-b border-aero-700 pb-6"
                        >
                            <div>
                                <h3 class="text-2xl text-aero-50">
                                    Envio de Componentes
                                </h3>
                            </div>
                        </div>

                        <!-- Endereço -->
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div>
                                    <h4
                                        class="text-lg font-bold text-aero-50 mb-2"
                                    >
                                        DA Aviação - Sede
                                    </h4>
                                    <p class="font-semibold">Endereço:</p>
                                    <p class="text-aero-300 leading-relaxed">
                                        Rua José Fonzar 2263 <br /> Jardim
                                        Recanto dos Pássaros <br /> Birigui - SP
                                    </p>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div>
                                    <h4
                                        class="text-lg font-semibold text-aero-50 mb-2"
                                    >
                                        Horário de Recebimento:
                                    </h4>
                                    <p class="text-aero-300">
                                        <span class="font-semibold text-aero-50"
                                            >Segunda a Sexta</span
                                        ><br />
                                        07:30 às 17:30
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- CTA Maps -->
                        <div class="pt-6 border-t border-aero-700">
                            <a
                                href="https://maps.app.goo.gl/q9bJYg4zJNNyApw87"
                                target="_blank"
                                class="inline-flex items-center gap-3 text-gold-base hover:text-gold-light font-semibold transition-colors group"
                            >
                                <span
                                    class="bg-aero-800/50 p-2 rounded-lg group-hover:bg-aero-700/50 transition-colors"
                                >
                                    <svg
                                        class="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="border-b text-aero-50 border-transparent group-hover:border-gold-base transition-all"
                                >
                                    Abrir no Google Maps
                                </span>
                                <svg
                                    class="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
