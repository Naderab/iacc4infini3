import { Injectable } from '@angular/core';
import { Residence } from '../core/models/residence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  ListResidence: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R1.jpg',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R2.jpg',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R3.jpg',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'Manzah 5',
      image: '../../assets/images/R4.jpg',
    },
  ];
  constructor(private http: HttpClient) {}
  apiUrl = 'http://localhost:3000/residences/';
  addToList(r: Residence) {
    this.ListResidence.push(r);
  }

  getAllResidences() {
    return this.http.get(this.apiUrl);
  }

  addResidence(r: Residence) {
    return this.http.post(this.apiUrl, r);
  }

  updateResidence(r: Residence) {
    return this.http.put(this.apiUrl + r.id, r);
  }

  deleteResidence(id: number) {
    return this.http.delete(this.apiUrl + id);
  }
}
