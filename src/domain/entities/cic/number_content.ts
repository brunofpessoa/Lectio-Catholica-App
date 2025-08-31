import { Reference } from './reference';

export interface NumberContent {
    id: number;
    title?: string;
    content: string;
    isQuote?: boolean;
    references?: Reference[];
    titleReferences?: Reference[];
}
