// libs
import { injectable } from 'inversify';

// modules
import { Metadata } from './model';
import { IProject } from './project.interface';

@injectable()
export class Project implements IProject {

  async saveMetaData(force: boolean, workingPath: string, metaData: Metadata): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
