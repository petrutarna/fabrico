/**
 * Lists all the symbols used to represent types in our DI core configuration.
 */
const DI_TYPES = {
  System: Symbol('System'),
  Logger: Symbol('Logger'),
  InMemoryFileSystem: Symbol('InMemoryFileSystem'),
  PhysicalFileSystem: Symbol('PhysicalFileSystem'),
  SeedLoader: Symbol('SeedLoader'),
  Project: Symbol('Project')
};

export { DI_TYPES };
