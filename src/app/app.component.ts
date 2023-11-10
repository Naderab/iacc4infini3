import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Bonjour 4 INIFINI 3';
  product = {
    id: 1,
    name: 'iphone',
  };

  products = [
    {
      id: 1,
      name: 'iphone',
      quantity:10
    },
    {
      id: 2,
      name: 'TV',
      quantity:0
    },
  ];

  getColorClass(p:any) {
    if (p.quantity == 0) {
      return 'red';
    }
    else {
     return 'green';
    }
  }

  Acheter(p:any) {
    p.quantity--;
  }
}
