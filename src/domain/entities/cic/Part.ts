import { Section } from "./Section";

export interface Parts {
    id: number;
    title?: string;
    subTitle?: string;
    sections: Section[];
}
