import { BibleData } from '../../../domain/entities/bible/BibleData';
import { Book } from '../../../domain/entities/bible/Book';
import { Chapter } from '../../../domain/entities/bible/Chapter';
import { Verse } from '../../../domain/entities/bible/Verse';
import { BibleRepository } from '../../../domain/repositories/BibleRepository';
import bibleRaw from '../../../shared/data/biblia_ave_maria.json';

export class InMemoryBibleRepository implements BibleRepository {
  private bible: BibleData;

  constructor() {
    this.bible = bibleRaw as BibleData;
  }

  getBooks(): Book[] {
    return this.bible.books || [];
  }

  getChapters(bookId: number): Chapter[] {
    return this.bible.books.find(b => b.id === bookId)?.chapters || [];
  }

  getVerses(bookId: number, chapterId: number): Verse[] {
    return (
      this.bible.books
        .find(b => b.id === bookId)
        ?.chapters.find(c => c.id === chapterId)?.verses || []
    );
  }
}
