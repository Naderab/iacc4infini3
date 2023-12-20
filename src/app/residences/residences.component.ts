import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { Apartment } from '../core/models/apartement';
import { ResidenceService } from '../Services/residence.service';
@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  listApartByResidence: Apartment[] = [];
  listFavoris: Apartment[] = [];
  listResidences: Residence[] = [];
  listApartments: Apartment[] = [
    {
      id: 1,
      appartNum: 1,
      floorNum: 0,
      surface: 100,
      terrace: 'oui',
      surfaceTerrace: 20,
      category: 'S+1',
      description: 'AppartementS+1',
      residence: this.listResidences[0],
    },
    {
      id: 2,
      appartNum: 2,
      floorNum: 0,
      surface: 130,
      terrace: 'non',
      surfaceTerrace: 0,
      category: 'S + 2',
      description: 'AppartementS+ 2',
      residence: this.listResidences[0],
    },
    {
      id: 3,
      appartNum: 3,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S + 3',
      description: 'AppartementS+ 3',
      residence: this.listResidences[1],
    },
    {
      id: 4,
      appartNum: 4,
      floorNum: 0,
      surface: 150,
      terrace: 'oui',
      surfaceTerrace: 30,
      category: 'S + 3',
      description: 'AppartementS+ 3',
      residence: this.listResidences[1],
    },
  ];
  constructor(private rs: ResidenceService) {
    this.rs.getAllResidences().subscribe({
      next: (data) => this.listResidences = data as Residence[],
      error : (err)=>console.log(err)
    })
  }
  showApartement(r: Residence) {
    this.listApartByResidence = [];
    this.listApartments.forEach((element) => {
      if (element.residence.id == r.id) {
        console.log(element);
        this.listApartByResidence.push(element);
      }
    });
  }

  likeApart(a: Apartment) {
    this.listFavoris.push(a);
    console.log(this.listFavoris);
  }

  deleteFromParent(residence: Residence) {
    let index = this.listResidences.indexOf(residence);
    this.listResidences.splice(index, 1);
  }
}
