import { Component, OnInit } from '@angular/core';

import { Truck } from '../truck';
import { TruckService } from "../trucks.service";

@Component({
  moduleId: module.id,
  selector: 'app-trucks-list',
  templateUrl: 'trucks-list.component.html'
})
export class TrucksListComponent implements OnInit {
  trucks: Truck[] = [];

  constructor(private truckService: TruckService) {}

  ngOnInit() {
    this.trucks = this.truckService.getTrucks();
  }

}
