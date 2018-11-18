/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import 'reflect-metadata';
import { inject, injectable } from 'inversify';

// modules
import { DI_TYPES } from '../bootstrap';
import { ISeedLoader, ISeedGenerator, ISeedDescriptor } from './index';
import { IRuntime, container } from '../core';

@injectable()
export class SeedLoader implements ISeedLoader {

  /**
   * Create a new instance of SeedLoader.
   */
  constructor(@inject(DI_TYPES.Runtime) private runtime: IRuntime) {
  }

  protected async boostrap(seedDescriptor: ISeedDescriptor) {
    seedDescriptor.bootstrapper.onInit(this.runtime.container);
  }

  public async loadSeed(seedName: string): Promise<ISeedDescriptor> {
    throw new Error('Method not implemented.');
  }

  public async createSeedGenerator(seedName: string): Promise<ISeedGenerator> {
    const seedDescriptor = await this.loadSeed(seedName);
    return seedDescriptor.customSeedGenerator(this.runtime.container);
  }

}
