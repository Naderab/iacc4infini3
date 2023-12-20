import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResidenceService } from '../Services/residence.service';
import { Residence } from '../core/models/residence';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css'],
})
export class FormResidenceComponent {
  constructor(private rs: ResidenceService,private router:Router) {}
  name = new FormControl('');
  formResidence = new FormGroup({
    name: new FormControl(''),
    /*address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
    }),*/
    address: new FormControl(''),
    image: new FormControl(''),
  });

  add() {
    console.log(this.formResidence.value);
    console.log(this.formResidence.getRawValue());

    console.log(this.formResidence);
    //this.rs.addToList(this.formResidence.value as Residence);
    //this.router.navigate(['/residences']);
    this.rs.addResidence(this.formResidence.value as Residence).subscribe({
      next : ()=> this.router.navigate(['/residences'])
    })
  }
}
