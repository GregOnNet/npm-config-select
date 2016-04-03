import {NpmConfigGroup} from './npm-config-group';
import * as path from 'path';

export class NpmPackageSelect {
  packages: JSON;

  constructor(pathToNpmConfig: string) {
    this.packages = require(path.join(process.cwd(), pathToNpmConfig));
  }

  groups(): Array<NpmConfigGroup> {
    return Object.keys(this.packages)
                 .map(key => new NpmConfigGroup(key, this.packages[key]));
  }
}
