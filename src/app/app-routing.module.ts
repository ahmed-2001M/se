import { Sensor3Component } from './components/sensor3/sensor3.component';
import { Sensor2Component } from './components/sensor2/sensor2.component';
import { SensorComponent } from './components/sensor/sensor.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home" , component : HomeComponent},
  {path:"sensor" , component : SensorComponent},
  {path:"sensor2" , component : Sensor2Component},
  {path:"sensor3" , component : Sensor3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
