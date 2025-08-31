import { Paragraph } from './paragraph';

export interface Article {
    id: number;
    title?: string;
    subTitle?: string;
    paragraphs: Paragraph[];
}
