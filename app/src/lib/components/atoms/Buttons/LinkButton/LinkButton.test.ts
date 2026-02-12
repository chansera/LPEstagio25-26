import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import LinkButton from './LinkButton.svelte';

describe('LinkButton', () => {

    it('deve renderizar o texto correto dentro do link', () => {
        // ARRANGE & ACT
        render(LinkButton, {
            props: {
                href: '/home',
                arialabel: 'Ir para home',
                variant: 'primary'
            }
        });

        // ASSERT
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
        expect(link.getAttribute('href')).toBe('/home');
    });

    it('deve ter target="_blank" quando for link externo', () => {
        // AGORA É COM VOCÊ:
        // 1. Renderize o LinkButton com a prop isExternal: true
        render(LinkButton, {
            props: {
                href: '/home',
                arialabel: 'Ir para home',
                variant: 'primary',
                isExternal: true
            }
        });
        // 2. Capture o link com getByRole
        const link = screen.getByRole('link');
        // 3. Verifique se o atributo 'target' é '_blank'
        expect(link.getAttribute('target')).toBe('_blank');
    });
});
