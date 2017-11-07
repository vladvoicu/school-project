import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { TrucksComponent } from './trucks/trucks.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/cars', pathMatch: 'full' },
    { path: 'cars', component: CarsComponent },
    { path: 'trucks', component: TrucksComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);