<script lang="ts">
    import { getContatosArray } from "$lib/constants";
    import ContactLink from "../atoms/ContactLink/ContactLink.svelte";

let contatos = getContatosArray(); 

</script>
<div class="bg-gray-50 min-h-screen py-16 md:py-24">
  <div class="container mx-auto px-4">


    <div class="text-center mb-16">
      <h1 class="text-3xl md:text-5xl text-gold-dark">
        Entre em Contato
      </h1>
      <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Nossa equipe está pronta para atender suas necessidades. Confira nosso FAQ ou utilize nossos canais diretos para solicitar orçamentos e esclarecer dúvidas.
      </p>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

      <!-- Seção de FAQ -->
      <div class="bg-aero-50 rounded-xl shadow-xl p-8 md:p-10">
        <h2 class="text-2xl font-bold text-gold-dark mb-6">Perguntas Frequentes</h2>

        <div class="space-y-6">
          <div>
            <h3 class="font-semibold text-gold-dark">1. Como solicito um orçamento?</h3>
            <p class="mt-2 text-gray-700 text-sm">Você pode solicitar diretamente pelo WhatsApp ou e-mail indicados ao lado. Nossa equipe responderá em até 24 horas úteis.</p>
          </div>

          <div>
            <h3 class="font-semibold text-gold-dark">2. Vocês atendem quais regiões?</h3>
            <p class="mt-2 text-gray-700 text-sm">Atendemos todo o Brasil, com logística especializada para garantir a entrega rápida e segura.</p>
          </div>

          <div>
            <h3 class="font-semibold text-gold-dark">3. Qual o prazo médio de entrega?</h3>
            <p class="mt-2 text-gray-700 text-sm">O prazo varia de acordo com o volume e destino, mas geralmente entre 5 e 10 dias úteis.</p>
          </div>

          <div>
            <h3 class="font-semibold text-gold-dark">4. Posso retirar o pedido no local?</h3>
            <p class="mt-2 text-gray-700 text-sm">Sim, você pode agendar a retirada em nosso endereço durante o horário de funcionamento.</p>
          </div>

          <div>
            <h3 class="font-semibold text-gold-dark">5. Vocês oferecem suporte pós-venda?</h3>
            <p class="mt-2 text-gray-700 text-sm">Sim, nosso time de suporte está disponível para auxiliar com qualquer dúvida ou necessidade após a compra.</p>
          </div>

          <div>
            <h3 class="font-semibold text-gold-dark">6. Quais formas de pagamento são aceitas?</h3>
            <p class="mt-2 text-gray-700 text-sm">Aceitamos PIX, transferência bancária e cartão de crédito. Para outras opções, consulte nosso setor financeiro.</p>
          </div>

          <div>
            <h3 class="font-semibold text-gold-dark">7. Como entro em contato com o setor de expedição?</h3>
            <p class="mt-2 text-gray-700 text-sm">Use o número de WhatsApp específico da expedição informado ao lado para obter atualizações sobre o envio.</p>
          </div>
        </div>
      </div>

      <!-- Canais de contato existentes -->
      <div class="bg-aero-50 rounded-xl shadow-xl overflow-hidden">
        <div class="p-8 md:p-10">
          <h2 class="text-2xl font-bold text-gold-dark mb-8">Nossos Canais</h2>

          <div class="space-y-8">
            <div>
              <h3 class="font-bold text-gold-dark uppercase text-sm tracking-wider">Endereço</h3>
              <p class="mt-1 text-gray-700">
                Rua José Fonzar, 2263<br>
                Jardim Recanto dos Pássaros<br>
                Birigui - SP, 16201-137
              </p>
            </div>

            <div>
              <h3 class="font-bold text-gold-dark uppercase text-sm tracking-wider">Contato Direto</h3>
                <ul class="flex flex-col space-y-4 text-sm w-full pt-2">
                    {#each contatos as contato}
                        <li>
                            <ContactLink
                                href={contato.href}
                                numero={contato.numero}
                                contactName={contato.name}
                                nameClass="text-aero-800"

                            />
                        </li>
                    {/each}
                </ul>
            </div>

             <div>
              <h3 class="font-bold text-gold-dark uppercase text-sm tracking-wider">Horário de Funcionamento</h3>
              <p class="mt-1 text-gray-700">
                Segunda - Sexta: 07:30 às 17:30
              </p>
            </div>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.717611099121!2d-50.3248358247317!3d-21.40129717997918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949610cc4a737c37%3A0x6b46c63b2c6a469!2sR.%20Jos%C3%A9%20Fonzar%2C%202263%20-%20Jardim%20Recanto%20dos%20P%C3%A1ssaros%2C%20Birigui%20-%20SP%2C%2016201-137!5e0!3m2!1spt-BR!2sbr!4v1719172465431!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">Mapa Sede D.A aviação
          </iframe>
        </div>
      </div>
    </div>
  </div>
</div>
