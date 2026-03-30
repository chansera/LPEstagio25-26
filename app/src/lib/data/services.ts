// src/data/services.ts
export interface Service {
  title: string;
  slug: string;
  description: string;
  image: string;
  image_alt: string;
  featured?: boolean; // opcional para destacar serviços
}

export const SERVICES: Service[] = [
  {
    title: 'Manutenção de Componentes',
    slug: 'manutencao-componentes',
    description: 'Diagnóstico, revisão e reparo certificados de magnetos, alternadores, motores de partida e sistemas hidráulicos, garantindo confiabilidade, rastreabilidade e conformidade com normas aeronáuticas.',
    image: '/componentes.webp',
    image_alt: 'Foto de manutenção de componentes aeronáuticos'
  },
  {
    title: 'Ensaios Não Destrutivos (NDT)',
    slug: 'ensaios-ndt',
    description: 'Inspeções avançadas sem danos à estrutura, utilizando técnicas como Magnaflux, Zyglo, Eddy Current e Ultrassom, conforme padrões NAS-410/EN-4179, assegurando a integridade estrutural.',
    image: '/ensaiosNaoD.webp',
    image_alt: 'Foto de ensaio não destrutivo em componente aeronáutico'
  },
  {
    title: 'Aferição de Instrumentos',
    slug: 'afericao-instrumentos',
    description: 'Calibração rastreável ao INMETRO e ajustes precisos de instrumentos aeronáuticos, garantindo a exatidão dos parâmetros críticos de voo e conformidade com especificações do fabricante.',
    image: '/afericao.webp',
    image_alt: 'Foto de aferição de instrumentos aeronáuticos'
  },
  {
    title: 'Pesagem e Balanceamento de Aeronaves',
    slug: 'pesagem-balanceamento',
    description: 'Pesagem e balanceamento executados com células de carga certificadas, assegurando estabilidade, segurança e desempenho conforme manuais do fabricante e regulamentações RBAC.',
    image: '/pesagem.webp',
    image_alt: 'Foto de pesagem de aeronave'
  },
  {
    title: 'Sistema de Combustível',
    slug: 'sistema-combustivel',
    description: 'Inspeção, manutenção e testes completos em carburadores, bombas e sistemas de injeção, garantindo fluxo eficiente e seguro de combustível em todas as condições operacionais.',
    image: '/sistema_combustivel.webp',
    image_alt: 'Foto de manutenção de sistema de combustível aeronáutico'
  },
  {
    title: 'Importação de Peças',
    slug: 'importacao-pecas',
    description: 'Fornecimento e importação ágil de peças aeronáuticas originais, com documentação de rastreabilidade e conformidade, provenientes de fornecedores homologados internacionalmente.',
    image: '/importacao_pecas.webp',
    image_alt: 'Foto de importação de peças aeronáuticas'
  },
  {
    title: 'RVSM - Teste Pitot-Static / Air Data',
    slug: 'rvsm-tps-air',
    description: 'Execução de testes em sistemas Pitot-Estático e Air Data, garantindo precisão de altitude e velocidade para operações RVSM, em conformidade com normas internacionais.',
    image: '/RVSM.webp',
    image_alt: 'Foto de teste Pitot-Static/Air Data em aeronave'
  },
  {
    title: 'Boroscopia',
    slug: 'boroscopia',
    description: 'Inspeção interna de motores e componentes por boroscopia digital de alta resolução, identificando desgaste, trincas e anomalias sem necessidade de desmontagem.',
    image: '/boroscopia.webp',
    image_alt: 'Foto de inspeção boroscópica em motor aeronáutico'
  },
  {
    title: 'Usinagem',
    slug: 'usinagem',
    description: 'Serviços de usinagem de alta precisão, incluindo retífica, fresagem, alinhamento e recuperação de componentes aeronáuticos, conforme tolerâncias e padrões OEM.',
    image: '/usinagem.webp',
    image_alt: 'Foto de usinagem de componentes aeronáuticos'
  },
  {
    title: 'Inspeção Dimensional',
    slug: 'inspecao-dimensional',
    description: 'Verificação dimensional com CMM e instrumentos calibrados, assegurando conformidade geométrica e dimensional conforme desenhos e normas técnicas.',
    image: '/inspecao_dimensional.webp',
    image_alt: 'Foto de inspeção dimensional de peças aeronáuticas'
  },
  {
    title: 'Revisão, Teste e Manutenção de Mangueiras',
    slug: 'revisao-teste-mangueiras',
    description: 'Revisão e testes de mangueiras aeronáuticas de combustível, óleo, hidráulico e pneumático, garantindo integridade, flexibilidade e vedação conforme padrões internacionais.',
    image: '/RTMM.webp',
    image_alt: 'Foto de revisão e testes de mangueiras aeronáuticas'
  },
  {
    title: 'Fabricação de Ferramentas e Soluções Sob Medida',
    slug: 'fabricacao-ferramentas',
    description: 'Projeto e fabricação de ferramentas e dispositivos personalizados para manutenção aeronáutica, oferecendo soluções sob medida para demandas específicas de operação e manutenção.',
    image: '/ferramentas.webp',
    image_alt: 'Foto de ferramentas aeronáuticas fabricadas sob medida'
  }
];
