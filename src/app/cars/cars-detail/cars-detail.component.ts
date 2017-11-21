import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Car } from "../car";
import { CarService } from "../cars.service";

@Component({
  moduleId: module.id,
  selector: 'app-cars-detail',
  templateUrl: 'cars-detail.component.html'
})
export class CarDetailComponent implements OnInit, OnDestroy {
  selectedCar: Car;
  private carIndex: number;
  private subscription: Subscription;

  constructor( private router: Router,
              private route: ActivatedRoute,
              private carsService: CarService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.carIndex = params['id'];
        this.selectedCar = this.carsService.getCar(this.carIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/cars', this.carIndex, 'edit']);
  }

  onDelete() {
    this.carsService.deleteCar(this.selectedCar);
    this.router.navigate(['/cars']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

