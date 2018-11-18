/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { injectable } from 'inversify';

// modules
import { IPhysicalFileSystem } from './physical-file-system.interface';

@injectable()
export class PhysicalFileSystem implements IPhysicalFileSystem {

  pathJoin(...path: string[]): Promise<string> {
    throw new Error('Method not implemented.');
  }

  pathExists(path: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  remove(path: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  createFile(path: string, data: any, force: boolean): Promise<void> {
    throw new Error('Method not implemented.');
  }

  createYamlFile(path: string, data: any, force: boolean): Promise<void> {
    throw new Error('Method not implemented.');
  }

  save(): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
