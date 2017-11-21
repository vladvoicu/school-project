import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CarService } from "../cars.service";

@Component({
  moduleId: module.id,
  selector: 'app-cars-list',
  templateUrl: 'cars-list.component.html'
})
export class CarsListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

}
