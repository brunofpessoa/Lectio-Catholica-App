import { Paragraph } from "./Paragraph";

export interface Article {
    id: number;
    article?: string;
    title?: string;
    paragraphs: Paragraph[];
}
