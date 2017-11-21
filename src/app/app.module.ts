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
import { CarItemComponent } from './cars/cars-list/car-item.component'

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
    CarItemComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
