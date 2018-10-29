// modules
import { IInMemoryFileSystem } from './in-memory-file-system.interface';

export class InMemoryFileSystem implements IInMemoryFileSystem {

  save(): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
