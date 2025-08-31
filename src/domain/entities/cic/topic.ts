import { CicNumber } from './cic_number';
import { Reference } from './reference';

export interface Topic {
    id: number;
    title?: string;
    numbers: CicNumber[];
    references?: Reference[];
}
