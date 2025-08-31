import { Verse } from './verse';

export interface Chapter {
    id: number;
    number: number;
    verses: Verse[];
}
