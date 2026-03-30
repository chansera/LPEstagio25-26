import type { Snippet } from "svelte";

type Variant = 'primary' | 'secondary' | 'outline';
export interface Props {
	href: string;
    className?: string;
    variant: Variant;
    target?: string;
    rel?: string;
    children?: Snippet
}
