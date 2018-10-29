// libs
import { Container } from 'inversify';

// modules
import { IBootstrapper } from '../core/bootstrap/bootstrapper.interface';
import { DI_TYPES } from './di-types';
import { IProject, Project, } from '../projects';
import { ISeedLoader, SeedLoader } from '../seeds';

class Bootstrapper implements IBootstrapper {

  public onInit(container: Container): void {
    container.bind<Project>(DI_TYPES.Project).to(Project).inSingletonScope();
    container.bind<ISeedLoader>(DI_TYPES.SeedLoader).to(SeedLoader).inSingletonScope();
  }

}

const bootstrapper = new Bootstrapper();
export { bootstrapper };
