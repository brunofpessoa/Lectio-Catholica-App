import { Article } from '../entities/cic/article';
import { Chapter } from '../entities/cic/chapter';
import { CicNumber } from '../entities/cic/cic_number';
import { Paragraph } from '../entities/cic/paragraph';
import { Part } from '../entities/cic/part';
import { Section } from '../entities/cic/section';
import { Topic } from '../entities/cic/topic';
import { Collection } from '../shared/collection';

export interface CicRepository {
    getParts(): Collection<Part>;
    getSections(partId: number): Collection<Section>;
    getChapters(sectionId: number): Collection<Chapter>;
    getArticles(chapterId: number): Collection<Article>;
    getParagraphs(articleId: number): Collection<Paragraph>;
    getTopics(paragraphId: number): Collection<Topic>;
    getNumbers(topicId: number): Collection<CicNumber>;
    getNumberByNumber(number: number): CicNumber;
}
