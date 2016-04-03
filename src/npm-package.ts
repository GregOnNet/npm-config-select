export class NpmPackage {
  name: string;
  files: Array<string>;

  constructor(candidate) {
    this.name = Object.keys(candidate)[0];
    this.files = candidate[this.name]
                  .files
                  .map(f => `./node_modules/${this.name}/${f}`);
  }
}
