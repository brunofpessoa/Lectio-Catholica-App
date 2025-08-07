import { NumberContentReference } from './NumberContentReference';

export interface NumberContent {
    id: number;
    title?: string;
    content: string;
    isQuote: boolean;
    references?: NumberContentReference[];
    titleReferences?: NumberContentReference[];
}
