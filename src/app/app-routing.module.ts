import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { RegisterComponent } from './register/register.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"vehicles",
    component: VehicleComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"car",
    component: CarComponent
  },
  {
    path:"newvehicle",
    component: NewVehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
