const Realm = require('realm');

// WARN: está pontando para o repositório de dados que é responsável por importar os dados.
const BibleSchemes = require('/home/bruno/projetos/Lectio Catholica Data/realm/bible_scheme');

function formatDiff(after, before) {
    return ((after - before) / 1024 / 1024).toFixed(2) + ' MB';
}

function profile(fn, ...args) {
    const start = process.hrtime.bigint();
    const before = process.memoryUsage();
    const result = fn(...args);
    const end = process.hrtime.bigint();
    const after = process.memoryUsage();

    const durationMs = Number(end - start) / 1_000_000;

    return () => {
        console.log('=============================| Tempo de execução |============================');
        console.log(`${durationMs.toFixed(3)} ms`);
        console.log('============================| Diferença de memória |==========================');
        console.log('heapUsed:', formatDiff(after.heapUsed, before.heapUsed));
        console.log('heapTotal:', formatDiff(after.heapTotal, before.heapTotal));
        console.log('rss:', formatDiff(after.rss, before.rss));
        console.log('external:', formatDiff(after.external, before.external));
        console.log('==============================================================================');
    };
}

async function test() {
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

    const result = realm.objects('Verse').filtered('chapter.book.id == $0 AND chapter.id == $1', 1, 1);
    console.log(result);
}

const print = profile(() => {
    test().then(() => {
        print();
        process.exit(0);
    });
});
