import { injectable } from 'inversify';
import * as fs from 'fs-extra';

import { Metadata } from './model';

const yamlJs = require('js-yaml');
const path = require('path');

@injectable()
export class Project {

  async saveMetaData(force: boolean, workingPath: string, metaData: Metadata): Promise<void> {
    const yaml = yamlJs.safeDump(metaData);
    const filePath = path.join(workingPath, '.fabrico.yml');
    const fileExist = await fs.pathExists(filePath);
    if (fileExist) {
      if (force) {
        await fs.remove(filePath);
      } else {
        throw new Error(`File already exist (${filePath}).`);
      }
    } else {
      await fs.createFile(filePath);
    }
    await fs.appendFile(filePath, yaml);
  }

}
