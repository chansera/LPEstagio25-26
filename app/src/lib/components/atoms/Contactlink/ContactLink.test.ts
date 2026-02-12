import { render, screen } from '@testing-library/svelte';
import { expect, test } from 'vitest';
import ContactLink from './ContactLink.svelte';
import type { ContactProps } from '$lib/types/contact';

test('deve gerar link de whatsapp válido', () => {
    // 1. ARRANGE
    const mockData: ContactProps = {
        id: 'test-id-1',
        label: 'Regina',
        value: '11333333333',
        type: 'whatsapp'
    };

    // 2. ACT
    render(ContactLink, { props: mockData });

    // 3. ASSERT
    const link = screen.getByRole('link');

    // CORREÇÃO: Usamos getAttribute() nativo e comparamos a string
    const href = link.getAttribute('href');
    expect(href).toBe(`https://wa.me/${mockData.value}`);
});

test('deve exibir o label corretamente', () => {
    const mockData: ContactProps = {
        id: 'test-id-2',
        label: 'financeiro',
        value: '11333333333',
        type: 'whatsapp'
    };

    render(ContactLink, { props: mockData });

    // CORREÇÃO: Se o getByText encontrar o elemento, ele já existe (truthy).
    // Se não encontrar, o teste falha automaticamente antes dessa linha.
    const elementoTexto = screen.getByText('financeiro');
    expect(elementoTexto).toBeTruthy();
});
