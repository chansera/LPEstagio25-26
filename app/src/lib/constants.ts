// src/lib/constants.ts
import type { ContactProps } from './types/contact';

export const SITE_INFO = {
  nome: 'D.A Aviação',
  endereco: 'Birigui, SP'
} as const;


export const CONTACT_LIST: ContactProps[] = [
    {
        id: 'regina-whatsapp',
        label: 'REGINA:',
        value: '5518997831844',
        type: 'whatsapp'
    },
    {
        id: 'financeiro-whatsapp',
        label: 'FINANCEIRO:',
        value: '5518996993184',
        type: 'whatsapp'
    },
    {
        id: 'expedicao-whatsapp',
        label: 'EXPEDIÇÃO:',
        value: '5518997450646',
        type: 'whatsapp'
    },
    {
        id: 'telefone-fixo',
        label: 'FIXO:',
        value: '5518996993184', // Assuming same number, check if this is correct for 'tel'
        type: 'tel'
    }
];
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
