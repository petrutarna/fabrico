/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import 'reflect-metadata';
import { injectable } from 'inversify';

// modules
import { ISeedLoader, ISeedGenerator, ISeedDescriptor } from './index';

@injectable()
export class SeedLoader implements ISeedLoader {

  public async loadSeed(seedName: string): Promise<ISeedDescriptor> {
    throw new Error('Method not implemented.');
  }

  public async createSeedGenerator(seedName: string): Promise<ISeedGenerator> {
    const seedDescriptor = await this.loadSeed(seedName);
    return seedDescriptor.customSeedGenerator();
  }

}
