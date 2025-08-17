import { Book } from '../entities/bible/Book';
import { Chapter } from '../entities/bible/Chapter';
import { Verse } from '../entities/bible/Verse';

export interface BibleRepository {
  getBooks(): Book[];
  getChapters(bookId: number): Chapter[];
  getVerses(bookId: number, chapterId: number): Verse[];
}
