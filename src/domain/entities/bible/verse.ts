import { CicReference } from './cic_reference';

export interface Verse {
    id: number;
    number: number;
    text: string;
    cicReferences: CicReference[];
}
