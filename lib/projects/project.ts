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
