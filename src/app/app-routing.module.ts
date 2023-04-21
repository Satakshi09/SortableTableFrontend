import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
const routes: Routes = [
  { path: 'cars', component: DynamicTableComponent },
  { path: '', redirectTo: 'cars', pathMatch: 'full'},
  { path:'create-car',component:CreateCarComponent},
  { path:'update-car/:id',component:CreateCarComponent},
  { path:'car-details/:id', component:CarDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
