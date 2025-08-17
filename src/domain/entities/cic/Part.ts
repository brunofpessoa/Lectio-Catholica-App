import { Section } from "./Section";

export interface Part {
    id: number;
    title?: string;
    subTitle?: string;
    sections: Section[];
}
