export interface IInMemoryFileSystem {
  save(): Promise<void>;
}
