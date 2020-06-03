import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewemployerComponent } from './newemployer/newemployer.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';


const routes: Routes = [
    {path:"", component:NewemployerComponent},
    {path:"Newemployer", component:NewemployerComponent},
    {path:"Employers", component:EmpdetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
