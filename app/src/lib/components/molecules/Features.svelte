<script>
  import Button from '$lib/components/Button.svelte';
</script>

<section class="bg-aero-900 py-16 lg:py-24 relative overflow-hidden">
  
    <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

            <div class="lg:w-1/2 text-center lg:text-left">
                <h2 class="text-3xl md:text-4xl font-extrabold text-aero-50 tracking-tight mb-6 leading-tight">
                    Sua frota não pode esperar. <br class="hidden md:block" />
                    <span class="text-gold-metal">Nós também não.</span>
                </h2>

                <p class="text-aero-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0 font-light">
                    Precisa de um orçamento urgente ou suporte? <br /> Nossa engenharia está pronta para receber seu componente agora mesmo.
                </p>

                <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">

                    <Button 
                        href="/contato" 
                        variant="primary" 
                        className="bg-gold-gradient text-aero-950 shadow-gold-base/20"
                    >
                        <svg class="w-5 h-5 text-aero-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        Falar com Especialista
                    </Button>

                    <Button 
                        href="mailto:comercial@daaviacao.com" 
                        variant="outline" 
                        className="border-gold-glow text-gold-base hover:text-gold-light backdrop-blur-sm"
                    >
                        Solicitar Cotação
                    </Button>

                </div>
            </div>

            <div class="lg:w-1/2 w-full">
                <div class="bg-surface border-gold-glow rounded-2xl p-8 lg:p-10 relative shadow-2xl">

                    <div class="flex items-center gap-4 mb-6 border-b border-aero-800 pb-6">
                        <div class="bg-aero-800 p-3 rounded-lg text-gold-base border border-aero-700">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-aero-50">Envio de Componentes</h3>
                            <p class="text-steel-metal text-sm font-medium">Base Operacional Principal</p>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <span class="text-gold-base mt-1">📍</span>
                            <span class="text-aero-200">
                                <strong class="text-aero-50 block mb-1">DA Aviação - Recebimento</strong>
                                Rua da Manutenção, 123 - Hangar 5<br>
                                Aeroporto Campo de Marte - SP
                            </span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-gold-base">⏰</span>
                            <span class="text-aero-300">Seg - Sex: 08:00 às 18:00</span>
                        </div>
                    </div>

                    <div class="mt-8 pt-6 border-t border-aero-800">
                        <a href="https://maps.google.com" target="_blank" class="text-sm font-bold text-gold-base hover:text-gold-light transition-colors flex items-center gap-2 group">
                            Abrir no Google Maps
                            <span class="transform group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
