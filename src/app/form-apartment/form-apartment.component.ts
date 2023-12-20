import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css'],
})
export class FormApartmentComponent {
  apartForm: FormGroup = new FormGroup({
    appartNum: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
    floorNum: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+'),
    ]),
    surface: new FormControl('', [Validators.required]),
    terrace: new FormControl('', [Validators.required]),
    surfaceTerrace: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required,Validators.minLength(10)]),
  });
}
