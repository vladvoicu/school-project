import { Component, Input } from '@angular/core';

import { Car } from '../car';

@Component({
  moduleId: module.id,
  selector: 'app-car-item',
  templateUrl: 'car-item.component.html'
})
export class CarItemComponent {
  @Input() car: Car;
  @Input() carId: number;
}
