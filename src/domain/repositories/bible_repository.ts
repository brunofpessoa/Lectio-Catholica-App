import { Book } from '../entities/bible/book';
import { Chapter } from '../entities/bible/chapter';
import { Verse } from '../entities/bible/verse';
import { Collection } from '../shared/collection';

export interface BibleRepository {
    getBooks(): Collection<Book>;
    getChapters(bookId: number): Collection<Chapter>;
    getVerses(bookId: number, chapterId: number): Collection<Verse>;
}
