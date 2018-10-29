// modules
import { Metadata } from './model';

export interface IProject {

  saveMetaData(force: boolean, workingPath: string, metaData: Metadata): Promise<void>;

}
