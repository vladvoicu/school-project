import { Injectable } from '@angular/core';

import { Truck } from "./truck";
import { Dotare } from "../dotare";

@Injectable()
export class TruckService {
  private trucks: Truck[] = [
    new Truck('Ford', 'Mondeo', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg',2009,'1.6','diesel','150cp', [
      new Dotare('Incalzire', true),
      new Dotare('Racire', true)
    ]),
    new Truck('VW', 'Golf', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',2011,'2.0','benzina','90cp', [])
  ];

  constructor() {}

  getTrucks() {
    return this.trucks;
  }
  
  getTruck(id: number) {
    return this.trucks[id];
  }
  
  deleteTruck(truck: Truck) {
    this.trucks.splice(this.trucks.indexOf(truck), 1);
  }

}
