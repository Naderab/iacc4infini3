import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  constructor(private ac: ActivatedRoute) {
    console.log(this.ac.snapshot.params['id'])
  }
}
