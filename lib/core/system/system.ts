// libs
import { injectable } from 'inversify';

// modules
import { ISystem } from '.';

@injectable()
export class System implements ISystem {

  /**
   * Create a new instance of system.
   */
  constructor() {
  }

  get version(): string {
    throw new Error('Method not implemented.');
  }

  get username(): string {
    throw new Error('Method not implemented.');
  }

}
