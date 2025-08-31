import { RealmBibleRepository } from 'src/infrastructure/repositories/realm/realm_bible_repository';
import { InMemoryCicRepository } from 'src/infrastructure/repositories/in_memory/cic_repository';
import { BibleUseCases } from '../usecases/bible_usecases';
import { CicUseCases } from '../usecases/cic_usecases';

const bibleRepo = await RealmBibleRepository.getInstance();
const inMemoryCicRepository = new InMemoryCicRepository();

export const useCases = {
    bible: new BibleUseCases(bibleRepo),
    cic: new CicUseCases(inMemoryCicRepository),
};
