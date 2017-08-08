import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

export interface Car {
    vin;
    year;
    brand;
    color;
}



@Component({
  selector: 'app-tipo-evento-list',
  templateUrl: './tipo-evento-list.component.html',
  styleUrls: ['./tipo-evento-list.component.scss']
})
export class TipoEventoListComponent implements OnInit {

  cars: Car[];

  constructor(private http: Http) {}

  ngOnInit() {
  	this.getCarsSmall();
  }
  
  getCarsSmall() {
     this.http.get('http://localhost:8000/')
                    .map(res => <Car[]> res.json().data)
                    .subscribe(cars => this.cars = cars);
   }
}
