/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import * as chai from 'chai';
import * as mocha from 'mocha';
import * as TypeMoq from 'typemoq';
import { Container } from 'inversify';

// modules
import { ISeedGenerator } from './seed-generator.interface';
import { SeedLoader } from './seed-loader';
import { ISeedDescriptor } from '../../bin';

const expect = chai.expect;

describe('SeedLoader should', () => {

  const seedGeneratorMock: TypeMoq.IMock<ISeedGenerator> = TypeMoq.Mock.ofType<ISeedGenerator>();
  const seedDescriptorMock: TypeMoq.IMock<ISeedDescriptor> = TypeMoq.Mock.ofType<ISeedDescriptor>();
  let seedLoaderMock: TypeMoq.IMock<SeedLoader>;

  beforeEach(() => {
    seedGeneratorMock.reset();
    seedDescriptorMock.reset();
    // Mock object must be thenable https://github.com/florinn/typemoq/issues/66
    seedDescriptorMock.setup((x: any) => x.then).returns(() => undefined);
    seedGeneratorMock.setup((x: any) => x.then).returns(() => undefined);
    const seedLoader = new SeedLoader();
    seedLoaderMock = TypeMoq.Mock.ofInstance<SeedLoader>(seedLoader);
    seedLoaderMock.callBase = true;
  });

  it('create a seed generator', async () => {
    const seedName = 'ca-seed';
    seedDescriptorMock.setup(x => x.customSeedGenerator()).returns(() => seedGeneratorMock.object);
    seedLoaderMock.setup(x => x.loadSeed(seedName)).returns(() => Promise.resolve<any>(seedDescriptorMock.object));
    const gen = await seedLoaderMock.object.createSeedGenerator(seedName);
    expect(gen).to.eq(seedGeneratorMock.object);
    seedDescriptorMock.verify(x => x.customSeedGenerator(), TypeMoq.Times.once());
    seedLoaderMock.verify(x => x.loadSeed(seedName), TypeMoq.Times.once());
  });

});
