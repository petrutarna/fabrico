// libs
import { injectable } from 'inversify';

// modules
import { ISeedLoader, ISeedGenerator } from './index';

@injectable()
export class SeedLoader implements ISeedLoader {

  public async loadSeed(seedName: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

  public async createSeedGenerator(seedName: string): Promise<ISeedGenerator> {
    const seed = await this.loadSeed(seedName);
    const gen = new seed.CustomSeedGenerator() as ISeedGenerator;
    return gen;
  }

}
