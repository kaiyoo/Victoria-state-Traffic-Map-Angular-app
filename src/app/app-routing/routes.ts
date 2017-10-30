import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { MapComponent } from '../map/map.component';
import { ListComponent } from '../list/list.component';

export const routes: Routes = [
  { path: 'map',  component: MapComponent },
  { path: 'list',  component: ListComponent },
  { path: '', redirectTo: '/map', pathMatch: 'full' }
];