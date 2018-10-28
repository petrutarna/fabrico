import { Container } from 'inversify';
import { ISeedGenerator } from './seed-generator.interface';

export class SeedGenerator implements ISeedGenerator {

  bootstrap(container: Container): Promise<void> {
    throw new Error('Method not implemented.');
  }

  initialize(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  prompt(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  preGeneration(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  generate(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  conflicts(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  postGeneration(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  cleanup(): Promise<void> {
    throw new Error('Method not implemented.');
  }

}
