/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { Container } from 'inversify';

// modules
import { IBootstrapper } from '../core/bootstrap/bootstrapper.interface';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
