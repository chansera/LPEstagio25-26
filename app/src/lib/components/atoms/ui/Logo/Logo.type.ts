export type Lugar = 'footer' | 'Header'
export interface LogoProps {
    logoImg: string;
    local: Lugar;
    descricao?: string;
    baseClass?: string;
}
