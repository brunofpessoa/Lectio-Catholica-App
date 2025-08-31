import { Cic } from './cic';

export interface CicReference {
    id: number;
    chapterStart: number;
    chapterEnd: number;
    verseStar: number;
    verseEnd: number;
    cic: Cic[];
}
