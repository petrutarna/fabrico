export interface IPhysicalFileSystem {
  pathJoin(...path: string[]): Promise<string>;
  pathExists(path: string): Promise<void>;
  remove(path: string): Promise<void>;
  createFile(path: string, data: any): Promise<void>;
  save(): Promise<void>;
}
