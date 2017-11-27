import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';
import { SidebarComponent } from './sidebar.component';
import { CarsComponent } from './cars/cars.component';
import { TrucksComponent } from './trucks/trucks.component';
import { routing } from './app.routing';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsDetailComponent } from './cars/cars-detail/cars-detail.component';
import { CarItemComponent } from './cars/cars-list/car-item.component';
import { TrucksListComponent } from './trucks/trucks-list/trucks-list.component';
import { TrucksDetailComponent } from './trucks/trucks-detail/trucks-detail.component';
import { TruckItemComponent } from './trucks/trucks-list/truck-item.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    SidebarComponent,
    CarsComponent,
    TrucksComponent,
    CarsListComponent,
    CarsDetailComponent,
    CarItemComponent,
    TrucksListComponent,
    TrucksDetailComponent,
    TruckItemComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
