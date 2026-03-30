// src/lib/constants.ts
import { formatWhatsAppLink } from "./utils/whatsapp";

export const SITE_INFO = {
  nome: 'D.A Aviação',
  regina: '5518997831844',
  financeiro: '5518997450646',
  email: 'd.a.aviacao@terra.com.br',
  endereco: 'Birigui, SP'
} as const;

export const CONTATOS = {
    comercial: { name: 'Comercial', numero: '(18) 99783-1844' },
    financeiro: { name: 'Orçamento/Financeiro', numero: '(18) 99745-0646' },
    regulamentacao: { name: 'Regulamentação', numero: '(18) 99783-1844' },
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
// src/lib/constants.ts

export const getContatosArray = () => {
  return Object.values(CONTATOS).map(contato => ({
    name: contato.name,
    numero: contato.numero,
    href: formatWhatsAppLink(contato.numero)
  }));
};
