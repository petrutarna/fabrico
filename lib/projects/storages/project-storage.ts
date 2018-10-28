import { Metadata } from "../model";

export interface IProjectStorage {

  /**
   * Get fabrico metadata.
   */
  getMetadata(): Promise<Metadata>;

}

export class ProjectStorage implements IProjectStorage {

  getMetadata(): Promise<Metadata> {
    return Promise.resolve(new Metadata());
  }

  saveMetadata(metadata: Metadata): Promise<void> {
    return Promise.resolve();
  }

}
