import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import ContactLink from './ContactLink.svelte';
import { SITE_INFO } from '$lib/constants';

test('deve gerar link de whatsapp válido a partir da constante SITE_INFO', () => {
    const props = {
        label: 'Regina',
        value: SITE_INFO.regina,
        type: 'whatsapp' as const // "as const" ajuda o TS a inferir o tipo literal
    };

    render(ContactLink, { props });

    const link = screen.getByRole('link');

    expect(link.getAttribute('href')).toBe(`https://wa.me/${SITE_INFO.regina}`);
});

test('deve exibir o label financeiro lowercase', () => {
    render(ContactLink, {
        props: { label: 'financeiro', value: SITE_INFO.financeiro, type: 'whatsapp' as const }
    });

    // O texto deve ser encontrado em CAIXA ALTA
    expect(screen.getByText('financeiro')).toBeTruthy();
});
