/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';

// modules
import { Runtime } from './runtime';

const expect = chai.expect;

describe('Runtime should', () => {

  let runtime: Runtime;

  beforeEach(() => {
    runtime = new Runtime();
  });

  it('have a container instance', async () => {
    expect(runtime.container).not.null;
  });

});
