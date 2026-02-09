// src/lib/types/contact.ts

export type ContactType = 'whatsapp' | 'tel' | 'email';

export interface ContactProps {
    label: string;
    value: string;
    type: ContactType;
    baseClass?: string;
    labelClass?: string;
    valueClass?: string;
}
