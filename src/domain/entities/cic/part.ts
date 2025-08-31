import { Section } from './section';

export interface Part {
    id: number;
    title?: string;
    subTitle?: string;
    sections: Section[];
}
