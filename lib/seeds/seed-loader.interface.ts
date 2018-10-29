import { ISeedGenerator } from "./seed-generator";

export interface ISeedLoader {

  /**
   * Load a seed by name.
   * @param seedName seed name.
   */
  loadSeed(seedName: string): Promise<any>;

  /**
   * Create a seed generator.
   * @param seedName name of the seed containing the seed generator.
   */
  createSeedGenerator(seedName: string): Promise<ISeedGenerator>;

}
