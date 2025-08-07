import { CicNumber } from './CicNumber';

export interface Topic {
    id: number;
    topic?: string;
    numbers: CicNumber[];
}
