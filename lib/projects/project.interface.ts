// modules
import { Metadata } from './model';

export interface IProject {

  saveMetaData(workingPath: string, metaData: Metadata, force: boolean): Promise<void>;

}
