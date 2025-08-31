import { CicRepository } from 'src/domain/repositories/cic_repository';

export class CicUseCases {
    constructor(private repo: CicRepository) {}

    getCicNumber(number: number) {
        return this.repo.getNumberByNumber(number);
    }
}
