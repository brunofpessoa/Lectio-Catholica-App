import { Paragraph } from "./Paragraph";

export interface Article {
    id: number;
    title?: string;
    subTitle?: string;
    paragraphs: Paragraph[];
}
