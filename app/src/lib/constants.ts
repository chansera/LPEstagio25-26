// src/lib/constants.ts

export const SITE_INFO = {
  nome: 'D.A Aviação',
  regina: '5518997831844',
  financeiro: '5518997450646',
  email: 'd.a.aviacao@terra.com.br',
  endereco: 'Birigui, SP'
} as const;

export interface NavLink {
  name: string;
  href: string;
}

export const SITE_ROUTES = [
  { name: 'Início', href: '/' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contato', href: '/contato' }
] as const satisfies NavLink[];
