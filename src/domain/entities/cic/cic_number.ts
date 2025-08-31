import { BibleReference } from './bible_reference';
import { NumberContent } from './number_content';

export interface CicNumber {
    id: number;
    number: number;
    isBriefing?: boolean;
    numberContents: NumberContent[];
    bibleReferences?: BibleReference[];
}
