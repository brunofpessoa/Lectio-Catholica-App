import { Chapter } from "../bible/Chapter";

export interface Section {
    id: number;
    section?: string;
    title?: string;
    chapters: Chapter[];
}
