import { Topic } from "./Topic";

export interface Paragraph {
    id: number;
    title?: string;
    subTitle?: string;
    topics: Topic[];
}
