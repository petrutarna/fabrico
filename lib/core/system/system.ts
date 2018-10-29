// libs
import { injectable } from 'inversify';
import os = require('os');

@injectable()
export class System {

  /**
   * Create a new instance of system.
   */
  constructor(public version: string) {
  }

  get username(): string {
    return os.userInfo().username;
  }

}
