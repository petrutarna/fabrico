// modules
import { ISeedLoader } from './seed-loader.interface';
import { ISeedGenerator } from './seed-generator.interface';

export class SeedLoader implements ISeedLoader {

  public createSeedGenerator(seedName: string): ISeedGenerator {
    const gen = new (require(seedName)).SeedGenerator() as ISeedGenerator;
    return gen;
  }

}
