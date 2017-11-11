import { Injectable } from '@angular/core';

import { Car } from "./car";
import { Dotare } from "../dotare";

@Injectable()
export class CarService {
  private cars: Car[] = [
    new Car('Ford', 'Mondeo', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg',2009,'1.6','diesel','150cp', [
      new Dotare('Incalzire', true),
      new Dotare('Racire', true)
    ]),
    new Car('VW', 'Golf', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',2011,'2.0','benzina','90cp', [])
  ];

  constructor() {}

  getCars() {
    return this.cars;
  }
  
  getCar(id: number) {
    return this.cars[id];
  }
  
  deleteCar(car: Car) {
    this.cars.splice(this.cars.indexOf(car), 1);
  }

}
