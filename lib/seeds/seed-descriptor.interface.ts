/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-11-18.
 */

// libs
import { Container } from 'inversify';

// modules
import { IBootstrapper } from '../core/bootstrap';
import { ISeedGenerator } from '../../bin';

export interface ISeedDescriptor {
  bootstrapper: IBootstrapper;
  customSeedGenerator: (Container) => ISeedGenerator;
}
