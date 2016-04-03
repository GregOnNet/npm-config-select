import {NpmConfigGroup} from './npm-config-group';

export class NpmConfig {
  packages: JSON;

  constructor(pathToNpmConfig: string) {
    this.packages = require(pathToNpmConfig);
  }

  groups(): Array<NpmConfigGroup> {
    return Object.keys(this.packages)
                 .map(key => new NpmConfigGroup(key, this.packages[key]));
  }
}
