import type { Snippet } from 'svelte';

export type ButtonVariant = 'primary' | 'secondary' | 'whatsapp';

export interface LinkButtonProps {
    variant: ButtonVariant;
    arialabel?: string;
    children?: Snippet;
    [key: string]: any;
}
