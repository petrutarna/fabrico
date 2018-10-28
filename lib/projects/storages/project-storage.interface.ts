import { Metadata } from '../model';

export interface IProjectStorage {

  /**
   * Get fabrico metadata.
   */
  getMetadata(): Promise<Metadata>;

}
