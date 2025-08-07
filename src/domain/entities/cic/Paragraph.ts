import { Topic } from "./Topic";

export interface Paragraph {
    id: number;
    paragraph?: string;
    title?: string;
    topics: Topic[];
}
