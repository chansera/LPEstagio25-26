// src/lib/constants.ts

export const SITE_INFO = {
  nome: 'D.A Aviação',
  endereco: 'Birigui, SP'
} as const;
// constants/contacts.ts
export const CONTACTS = {
  regina: {
    label: 'Regina',
    display: '(18) 99783-1844',
    number: '5518997831844',
    type: 'whatsapp' as const
  },
  financeiro: {
    label: 'Financeiro',
    display: '(18) 99637-2444',
    number: '5518996372444',
    type: 'whatsapp' as const
  },
  expedicao: {
    label: 'Expedição',
    display: '(18) 99699-3184',
    number: '5518996993184',
    type: 'whatsapp' as const
  },
  fixo: {
    label: 'Fixo',
    display: '(18) 3642-5048',
    number: '551836425048',
    type: 'phone' as const
  }
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
