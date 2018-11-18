/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-11-18.
 */

// libs
import { Container } from 'inversify';

 // modules
import { IRuntime } from './runtime.interface';

export class Runtime implements IRuntime {

  /**
   * Create a new instance of Runtime.
   */
  constructor(private ctr: Container) {

  }

  get container(): Container {
    return this.ctr;
  }

}
