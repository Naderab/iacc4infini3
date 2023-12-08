import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { ResidencesComponent } from './residences/residences.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';

const routes: Routes = [
  {path:'users',component:ListUsersComponent},
  {path:'residences',component:ResidencesComponent},
  {path:'user/:id/:name',component:DetailsUserComponent},
  {path:'',redirectTo:'/residences',pathMatch:'full'},
  {path:'addResidence',component:FormResidenceComponent},
  {path:'residence/:id',component:ApartmentsComponent},
  {path:'addApartment',component:FormApartmentComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
