import { SubjectTitleGroup } from "./SubjectTitleGroup";

export interface SubjectLetterGroup {
    id: number;
    letter: string;
    subjectGroups: SubjectTitleGroup[];
}
