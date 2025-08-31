import { Topic } from './topic';

export interface Paragraph {
    id: number;
    title?: string;
    subTitle?: string;
    topics: Topic[];
}
