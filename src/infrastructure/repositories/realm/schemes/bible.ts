import Realm from 'realm';

const Cic: Realm.ObjectSchema = {
    name: 'Cic',
    properties: {
        number: 'int',
        confer: 'bool?',
    },
};

const CicReference: Realm.ObjectSchema = {
    name: 'CicReference',
    primaryKey: 'id',
    properties: {
        id: 'int',
        chapterStart: 'int',
        chapterEnd: 'int',
        verseStar: 'int',
        verseEnd: 'int',
        cic: 'Cic[]',
        verse: {
            type: 'linkingObjects',
            objectType: 'Verse',
            property: 'cicReferences',
        },
    },
};

const Verse: Realm.ObjectSchema = {
    name: 'Verse',
    primaryKey: 'id',
    properties: {
        id: 'int',
        number: 'int',
        text: 'string',
        cicReferences: 'CicReference[]',
        chapter: {
            type: 'linkingObjects',
            objectType: 'Chapter',
            property: 'verses',
        },
    },
};

const Chapter: Realm.ObjectSchema = {
    name: 'Chapter',
    primaryKey: 'id',
    properties: {
        id: 'int',
        number: 'int',
        verses: 'Verse[]',
        book: {
            type: 'linkingObjects',
            objectType: 'Book',
            property: 'chapters',
        },
    },
};

const Book: Realm.ObjectSchema = {
    name: 'Book',
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: 'string',
        abbr: 'string',
        chapters: 'Chapter[]',
    },
};

const Bible: Realm.ObjectSchema = {
    name: 'Bible',
    properties: {
        info: 'string', // TODO: definir tipo do info
        books: 'Book[]',
    },
};

export const BibleSchemes = {
    Bible,
    Book,
    Chapter,
    Verse,
    CicReference,
    Cic,
};
