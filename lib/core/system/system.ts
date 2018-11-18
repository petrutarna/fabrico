/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

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
