import { CicReference } from './CicReference';

export interface Verse {
    id: number;
    number: number;
    text: string;
    hasCicReferences: boolean;
    cicReferences?: CicReference[];
}
