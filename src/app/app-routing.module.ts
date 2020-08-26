import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TodayComponent} from './today/today.component';
import {HourlyComponent} from './hourly/hourly.component';
import {TenDayComponent} from './ten-day/ten-day.component';

const routes: Routes = [
  {path: 'ten-day', component: TenDayComponent},
  {path: 'hourly', component: HourlyComponent},
  {path: 'today', component: TodayComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
