import { Chapter } from "./Chapter";

export interface Section {
    id: number;
    title?: string;
    subTitle?: string;
    chapters: Chapter[];
}
