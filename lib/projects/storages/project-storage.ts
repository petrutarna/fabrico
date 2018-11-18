/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// modules
import { Metadata } from '../model';
import { IProjectStorage } from './project-storage.interface';

export class ProjectStorage implements IProjectStorage {

  getMetadata(): Promise<Metadata> {
    return Promise.resolve(new Metadata());
  }

  saveMetadata(metadata: Metadata): Promise<void> {
    return Promise.resolve();
  }

}
