/*
 * Copyright (c) 2018 Code Architects
 *
 * Created by Code Architects <info@codearchitects.com> on 2018-10-20.
 */

// modules
import { Target } from './target';

export class Metadata {
  version: string;
  name: string;
  description: string;
  author: string;
  targets: Target[];
}
