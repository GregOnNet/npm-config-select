import {NpmPackage} from './npm-package';

export class NpmConfigGroup {
  packages: Array<NpmPackage>;

  constructor(public name: string, packagesRaw: Array<any>) {
    this.packages = packagesRaw.map(p => new NpmPackage(p));
  }
}
