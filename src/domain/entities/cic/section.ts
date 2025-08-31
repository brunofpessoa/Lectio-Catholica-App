import { Chapter } from './chapter';

export interface Section {
    id: number;
    title?: string;
    subTitle?: string;
    chapters: Chapter[];
}
