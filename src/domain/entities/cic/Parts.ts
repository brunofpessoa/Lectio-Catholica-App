import { Section } from "./Section";

export interface Parts {
    id: number;
    part: string;
    title?: string;
    sections: Section[];
}
