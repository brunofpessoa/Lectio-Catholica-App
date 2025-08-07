import { Chapter } from './Chapter';

export interface Book {
    id: number;
    name: string;
    abbr: string;
    chapters: Chapter[];
}
