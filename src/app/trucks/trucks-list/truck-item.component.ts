import { Component, Input } from '@angular/core';

import { Truck } from '../truck';

@Component({
  moduleId: module.id,
  selector: 'app-truck-item',
  templateUrl: 'truck-item.component.html'
})
export class TruckItemComponent {
  @Input() truck: Truck;
  @Input() truckId: number;
}
