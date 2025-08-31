import { SubjectTitleGroup } from './subject_title_group';

export interface SubjectLetterGroup {
    id: number;
    letter: string;
    subjectGroups: SubjectTitleGroup[];
}
