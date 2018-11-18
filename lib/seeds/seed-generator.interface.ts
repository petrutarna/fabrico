/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// libs
import { Container } from 'inversify';

export interface ISeedGenerator {

  /**
   * Boostrap call. Perform the boostrap of the seed.
   */
  bootstrap(container: Container): Promise<void>;

  /**
   * Initialize call. Perform the initialization steps.
   */
  initialize(): Promise<void>;

  /**
   * Prompt call. Prompt users for options.
   */
  prompt(): Promise<void>;

  /**
   * Previous generation call.
   */
  preGeneration(): Promise<void>;

  /**
   * Generat call.
   */
  generate(): Promise<void>;

  /**
   * Conflicts call. Perfom conflicts resolution.
   */
  conflicts(): Promise<void>;

  /**
   * Post generation call.
   */
  postGeneration(): Promise<void>;

  /**
   * Cleanup call. Perform any reuquired cleanup operation.
   */
  cleanup(): Promise<void>;

}
