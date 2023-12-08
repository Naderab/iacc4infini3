import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResidencesComponent } from './residences/residences.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResidencesComponent,
    ListUsersComponent,
    NotFoundComponent,
    DetailsUserComponent,
    FormResidenceComponent,
    ApartmentsComponent,
    FormApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
