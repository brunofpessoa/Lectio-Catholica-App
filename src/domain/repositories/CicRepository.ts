import { Article } from '../entities/cic/Article';
import { Chapter } from '../entities/cic/Chapter';
import { CicNumber } from '../entities/cic/CicNumber';
import { Paragraph } from '../entities/cic/Paragraph';
import { Part } from '../entities/cic/Part';
import { Section } from '../entities/cic/Section';
import { Topic } from '../entities/cic/Topic';

export interface CicRepository {
  getParts(): Part[];
  getSections(partId: number): Section[];
  getChapters(sectionId: number): Chapter[];
  getArticles(chapterId: number): Article[];
  getParagraphs(articleId: number): Paragraph[];
  getTopics(paragraphId: number): Topic[];
  getNumbers(topicId: number): CicNumber[];
  getNumberByNumber(number: number): CicNumber;
}
