import Realm from 'realm';
import { BibleSchemes } from './schemes/bible';
import { BibleRepository } from 'src/domain/repositories/bible_repository';
import { Book } from 'src/domain/entities/bible/book';
import { Chapter } from 'src/domain/entities/bible/chapter';
import { Verse } from 'src/domain/entities/bible/verse';

export class RealmBibleRepository implements BibleRepository {
    private static instance: RealmBibleRepository;
    private realm: Realm;

    private constructor(realm: Realm) {
        this.realm = realm;
    }

    public static async getInstance() {
        if (!RealmBibleRepository.instance) {
            const realm = await Realm.open({
                path: 'realm_databases/bible.realm',
                schema: [
                    BibleSchemes.Book,
                    BibleSchemes.Chapter,
                    BibleSchemes.Verse,
                    BibleSchemes.CicReference,
                    BibleSchemes.Cic,
                ],
            });
            RealmBibleRepository.instance = new RealmBibleRepository(realm);
        }
        return this.instance;
    }

    getBooks() {
        return this.realm.objects<Book>('Book');
    }

    getChapters(bookId: number) {
        return this.realm.objects<Chapter>('Chapter').filtered('book.id == $0', bookId);
    }

    getVerses(bookId: number, chapterId: number) {
        return this.realm
            .objects<Verse>('Verse')
            .filtered('chapter.book.id == $0 AND chapter.id == $1', bookId, chapterId);
    }
}
