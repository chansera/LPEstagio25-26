export function formatWhatsAppLink(phone: string): string {
  const digits = phone.replace(/\D/g, '');

  if (!digits) return '#';

  // Remove leading zero do DDD se existir (ex: 011 -> 11)
  const withoutLeadingZero = digits.replace(/^0/, '');

  // Adiciona código do Brasil se não estiver presente
  const withCountry = withoutLeadingZero.startsWith('55')
    ? withoutLeadingZero
    : `55${withoutLeadingZero}`;

  return `https://wa.me/${withCountry}`;
}
