import { Verse } from './Verse';

export interface Chapter {
    id: number;
    number: number;
    verses: Verse[];
}
