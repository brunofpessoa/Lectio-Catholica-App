import { CicNumber } from './CicNumber';
import { Reference } from './Reference';

export interface Topic {
    id: number;
    title?: string;
    numbers: CicNumber[];
    references?: Reference[];
}
