/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { injectable } from 'inversify';

// modules
import { Metadata } from './model';
import { IProject } from './project.interface';

@injectable()
export class Project implements IProject {

  async saveMetaData(workingPath: string, metaData: Metadata, force: boolean): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
