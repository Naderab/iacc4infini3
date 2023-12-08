import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {
name = new FormControl("");
formResidence = new FormGroup({
  name: new FormControl({value:"test",disabled:true}),
  address:new FormGroup({
    street:new FormControl(""),
    city:new FormControl("")
  }),
  image:new FormControl("")
})

add(){
  console.log(this.formResidence.value)
  console.log(this.formResidence.getRawValue())

  console.log(this.formResidence)

}
}
