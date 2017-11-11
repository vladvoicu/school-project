import { Dotare } from "../dotare";

export class Truck {
  constructor(public marca: string, public model: string, public imagePath: string, public an: number, public capacitate: string,
public combustibil: string, public putere: string, public dotari:Dotare[]) {}
}