import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Truck } from "../truck";
import { TruckService } from "../trucks.service";

@Component({
  moduleId: module.id,
  selector: 'app-trucks-detail',
  templateUrl: 'trucks-detail.component.html'
})
export class TruckDetailComponent implements OnInit, OnDestroy {
  selectedTruck: Truck;
  private truckIndex: number;
  private subscription: Subscription;

  constructor( private router: Router,
              private route: ActivatedRoute,
              private trucksService: TruckService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.truckIndex = params['id'];
        this.selectedTruck = this.trucksService.getTruck(this.truckIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/trucks', this.truckIndex, 'edit']);
  }

  onDelete() {
    this.trucksService.deleteTruck(this.selectedTruck);
    this.router.navigate(['/trucks']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

