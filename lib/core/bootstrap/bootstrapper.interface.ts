/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { Container } from 'inversify';

export interface IBootstrapper {

  onInit(container: Container): void;

}
