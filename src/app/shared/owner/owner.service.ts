import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarService } from '../car/car.service';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  public API = '//thawing-chamber-47973.herokuapp.com';
  public OWNER_API = this.API + '/owners';
  cars: Array<any>;

  constructor(private http: HttpClient, private carService: CarService) { }

  getAll(): Observable<any> {
    return this.http.get(this.OWNER_API);
  }

  getByLink(link: string) {
    return this.http.get(link);
  }

  save(owner: any): Observable<any> {
    let result: Observable<Object>;
    if (owner['href']) {
      result = this.http.put(owner.href, owner);
    } else {
      result = this.http.post(this.OWNER_API, owner);
    }
    return result;
  }

  remove(href: string, ownerDni) {
    this.carService.getAll().subscribe(data => {
      this.cars = data._embedded.cars;
      for (const car of this.cars) {
        if (ownerDni == car.ownerDni) {
          console.log(car.ownerDni);
          var ownerCar = car;
          ownerCar.ownerDni = null;
          console.log(ownerCar);
          this.carService.save(ownerCar);
        }
      }
    });
    return this.http.delete(href);
  }
}
