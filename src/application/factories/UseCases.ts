import { InMemoryBibleRepository } from '../../infrastructure/repositories/in-memory/BibleRepository';
import { InMemoryCicRepository } from '../../infrastructure/repositories/in-memory/CicRepository';
import { BibleUseCases } from '../usecases/BibleUseCases';
import { CicUseCases } from '../usecases/CicUseCases';

const inMemoryBibleRepository = new InMemoryBibleRepository();
const inMemoryCicRepository = new InMemoryCicRepository();

export const useCases = {
  bible: new BibleUseCases(inMemoryBibleRepository),
  cic: new CicUseCases(inMemoryCicRepository),
};

