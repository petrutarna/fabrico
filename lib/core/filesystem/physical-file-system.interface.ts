/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

export interface IPhysicalFileSystem {
  pathJoin(...path: string[]): Promise<string>;
  pathExists(path: string): Promise<boolean>;
  remove(path: string): Promise<void>;
  createFile(path: string, data: any, force: boolean): Promise<void>;
  createYamlFile(path: string, data: any, force: boolean): Promise<void>;
  save(): Promise<void>;
}
