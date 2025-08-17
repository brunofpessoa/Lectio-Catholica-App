import { BibleRepository } from '../../domain/repositories/BibleRepository';

export class BibleUseCases {
  constructor(private repo: BibleRepository) {}

  getBooks() {
    return this.repo.getBooks();
  }

  getChapters(bookId: number) {
    return this.repo.getChapters(bookId);
  }

  getVerses(bookId: number, chapterId: number) {
    return this.repo.getVerses(bookId, chapterId);
  }

  getBibleBookList() {
    return this.repo.getBooks().map(book => ({
      label: book.name,
      value: book.id,
    }));
  }

  getBibleChapterList(bookId: number) {
    return this.repo.getChapters(bookId).map(chapter => ({
      label: String(chapter.number),
      value: chapter.id,
    }));
  }

  getBibleVerses(bookId: number, chapterId: number) {
    return this.repo.getVerses(bookId, chapterId);
  }
}
