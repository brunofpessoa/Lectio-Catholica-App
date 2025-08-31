import { Chapter } from './chapter';

export interface Book {
    id: number;
    name: string;
    abbr: string;
    chapters: Chapter[];
}
