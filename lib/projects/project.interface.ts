/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// modules
import { Metadata } from './model';

export interface IProject {

  saveMetaData(workingPath: string, metaData: Metadata, force: boolean): Promise<void>;

}
