export class Class {
  private _id: number;
  name: string;
  isCool: boolean;

  constructor(id: number, name: string, isCool: boolean) {
    this._id = id;
    this.name = name;
    this.isCool = isCool;
  }

  get id(): number {
    return this._id;
  }

  toString(): string {
    return `Class: { id: ${this.id}, name: ${this.name}, isCool: ${this.isCool} }`;
  }
}
