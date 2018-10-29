// libs
import { Container } from 'inversify';

// modules
import { IBootstrapper } from '../core/bootstrap/bootstrapper.interface';
import { DI_TYPES } from './di-types';
import { IProject, Project, } from '../projects';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
    container.bind<Project>(DI_TYPES.Project).to(Project).inSingletonScope();
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
