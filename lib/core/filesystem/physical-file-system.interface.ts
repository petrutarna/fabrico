export interface IPhysicalFileSystem {
  pathJoin(...path: string[]): Promise<string>;
  pathExists(path: string): Promise<boolean>;
  remove(path: string): Promise<void>;
  createFile(path: string, data: any, force: boolean): Promise<void>;
  createYamlFile(path: string, data: any, force: boolean): Promise<void>;
  save(): Promise<void>;
}
