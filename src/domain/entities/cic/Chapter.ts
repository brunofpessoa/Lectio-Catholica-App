import { Article } from './Article';

export interface Chapter {
    id: number;
    title?: string;
    subTitle?: string;
    articles: Article[];
}
