export interface ISeedLoader {

  /**
   * Create a seed generator.
   * @param seedName name of the seed containing the seed generator.
   */
  createSeedGenerator(seedName: string);

}
