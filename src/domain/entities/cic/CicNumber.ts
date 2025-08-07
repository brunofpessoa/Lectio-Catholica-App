import { NumberContent } from './NumberContent';

export interface CicNumber {
    id: number;
    number: number;
    isBriefing: boolean;
    numberContents: NumberContent[];
}
