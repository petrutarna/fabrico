// libs
import { IPhysicalFileSystem } from './physical-file-system.interface';

export class PhysicalFileSystem implements IPhysicalFileSystem {

  pathJoin(...path: string[]): Promise<string> {
    throw new Error('Method not implemented.');
  }

  pathExists(path: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  remove(path: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  createFile(path: string, data: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

  save(): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
