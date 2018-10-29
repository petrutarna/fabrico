import { IBootstrapper } from '../core/bootstrap/bootstrapper.interface';
import { Container } from 'inversify';
import { DI_TYPES } from './di-types';
import { Project } from '../../bin';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
    container.bind<Project>(DI_TYPES.Project).to(Project).inSingletonScope();
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
