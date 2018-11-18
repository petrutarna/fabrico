/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// modules
import { ISeedDescriptor } from './seed-descriptor.interface';
import { ISeedGenerator } from './seed-generator.interface';

export interface ISeedLoader {

  /**
   * Load a seed by name.
   * @param seedName seed name.
   */
  loadSeed(seedName: string): Promise<ISeedDescriptor>;

  /**
   * Create a seed generator.
   * @param seedName name of the seed containing the seed generator.
   */
  createSeedGenerator(seedName: string): Promise<ISeedGenerator>;

}
