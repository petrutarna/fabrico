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
