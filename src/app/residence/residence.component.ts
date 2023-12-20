import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  @Input() residence!: Residence;
  @Output() d = new EventEmitter();

  deleteFromChild() {
    this.d.emit(this.residence)
  }
}
