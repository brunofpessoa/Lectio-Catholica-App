export interface BibleReference {
    book: string;
    confer?: boolean;
    chapterStart: number;
    chapterEnd: number;
    verseStar: number;
    verseEnd: number;
}
