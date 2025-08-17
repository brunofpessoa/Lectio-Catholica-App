import { CicRepository } from '../../domain/repositories/CicRepository';

export class CicUseCases {
  constructor(private repo: CicRepository) {}

  getCicNumber(number: number) {
    return this.repo.getNumberByNumber(number);
  }
}
