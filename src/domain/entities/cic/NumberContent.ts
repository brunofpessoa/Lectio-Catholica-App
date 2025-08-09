import { Reference } from "./Reference";

export interface NumberContent {
    id: number;
    title?: string;
    content: string;
    isQuote?: boolean;
    references?: Reference[];
    titleReferences?: Reference[];
}
