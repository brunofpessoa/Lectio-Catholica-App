import { CicRepository } from 'src/domain/repositories/cic_repository';
import { CicData } from 'src/domain/entities/cic/cic_data';
import { Part } from 'src/domain/entities/cic/part';
import { Section } from 'src/domain/entities/cic/section';
import { Chapter } from 'src/domain/entities/cic/chapter';
import { Article } from 'src/domain/entities/cic/article';
import { Paragraph } from 'src/domain/entities/cic/paragraph';
import { Topic } from 'src/domain/entities/cic/topic';
import { CicNumber } from 'src/domain/entities/cic/cic_number';

import cicRaw from '../../../../data/cic.json';

function findChildrenById(arr: any[], targetId: number, targetName: string) {
    for (const item of arr) {
        if (item.id === targetId && item[targetName]) {
            return item[targetName];
        }

        for (const value of Object.values(item)) {
            if (Array.isArray(value)) {
                const found: any = findChildrenById(value, targetId, targetName);
                if (found) return found;
            }
        }
    }
    return null;
}

function findCicNumber(arr: any[], number: number) {
    for (const item of arr) {
        if (item.number === number) {
            return item;
        }

        for (const value of Object.values(item)) {
            if (Array.isArray(value)) {
                const found: any = findCicNumber(value, number);
                if (found) return found;
            }
        }
    }
    return null;
}

export class InMemoryCicRepository implements CicRepository {
    private cic: CicData;

    constructor() {
        this.cic = cicRaw as CicData;
    }
    getParts(): Part[] {
        return this.cic.parts;
    }
    getSections(partId: number): Section[] {
        return findChildrenById(this.cic.parts, partId, 'sections');
    }
    getChapters(sectionId: number): Chapter[] {
        return findChildrenById(this.cic.parts, sectionId, 'chapters');
    }
    getArticles(chapterId: number): Article[] {
        return findChildrenById(this.cic.parts, chapterId, 'articles');
    }
    getParagraphs(articleId: number): Paragraph[] {
        return findChildrenById(this.cic.parts, articleId, 'paragraphs');
    }
    getTopics(paragraphId: number): Topic[] {
        return findChildrenById(this.cic.parts, paragraphId, 'topics');
    }
    getNumbers(topicId: number): CicNumber[] {
        return findChildrenById(this.cic.parts, topicId, 'numbers');
    }
    getNumberByNumber(number: number): CicNumber {
        return findCicNumber(this.cic.parts, number);
    }
}
