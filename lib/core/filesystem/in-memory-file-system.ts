/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// modules
import { IInMemoryFileSystem } from './in-memory-file-system.interface';

export class InMemoryFileSystem implements IInMemoryFileSystem {

  save(): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
