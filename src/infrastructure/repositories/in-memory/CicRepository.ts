import { Article } from '../../../domain/entities/cic/Article';
import { Chapter } from '../../../domain/entities/cic/Chapter';
import { CicData } from '../../../domain/entities/cic/CicData';
import { CicNumber } from '../../../domain/entities/cic/CicNumber';
import { Paragraph } from '../../../domain/entities/cic/Paragraph';
import { Part } from '../../../domain/entities/cic/Part';
import { Section } from '../../../domain/entities/cic/Section';
import { Topic } from '../../../domain/entities/cic/Topic';
import { CicRepository } from '../../../domain/repositories/CicRepository';
import cicRaw from '../../../shared/data/cic.json';

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
