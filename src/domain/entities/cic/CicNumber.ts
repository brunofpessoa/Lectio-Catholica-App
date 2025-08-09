import { BibleReference } from './BibleReference';
import { NumberContent } from './NumberContent';

export interface CicNumber {
    id: number;
    number: number;
    isBriefing?: boolean;
    numberContents: NumberContent[];
    bibleReferences?: BibleReference[];
}
