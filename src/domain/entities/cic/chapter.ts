import { Article } from './article';

export interface Chapter {
    id: number;
    title?: string;
    subTitle?: string;
    articles: Article[];
}
