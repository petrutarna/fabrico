/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

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
