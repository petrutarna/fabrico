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
import { InMemoryFileSystem } from './in-memory-file-system';

const expect = chai.expect;

describe('InMemoryFileSystem should', () => {

  let imfs: InMemoryFileSystem;

  beforeEach(() => {
    imfs = new InMemoryFileSystem();
  });

  it('save the metadata', async () => {
    // To be implemented
  });

});
