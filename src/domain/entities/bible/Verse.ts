import { CicReference } from './CicReference';

export interface Verse {
    id: number;
    number: number;
    text: string;
    cicReferences?: CicReference[];
}
