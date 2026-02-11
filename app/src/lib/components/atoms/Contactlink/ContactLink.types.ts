// src/lib/types/contact.ts

export type ContactType = 'whatsapp' | 'tel' | 'email';

export interface ContactProps {
    id: string;
    label: string;
    value: string;
    type: ContactType;
    arialabel?: string;
    baseClass?: string;
    labelClass?: string;
    valueClass?: string;
}
