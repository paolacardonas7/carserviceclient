import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner/owner.service';
import { CarService } from '../shared/car/car.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Array<any>;
  cars: Array<any>;

  constructor(private ownerService: OwnerService, private carService: CarService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      this.cars = data._embedded.cars;
    });

    this.ownerService.getAll().subscribe(data => {
      this.owners = data._embedded.owners;
    });
  }

  removeItemFromArr(item) {
    var i = this.owners.indexOf(item);
    this.owners.splice(i, 1);
  }

  //usar ngFor?
  remove(selctedOwners) {
    for (const selctedOwner of selctedOwners) {
      var href = selctedOwner.value._links.self.href;
      this.ownerService.remove(href, selctedOwner.dni).subscribe((error) => console.error(error));
    }
    window.location.reload();

/*     for (var i = 0; i < selctedOwners.length; i++) {
      var owner = selctedOwners[i].value;
      var ownerCar;
      var href = selctedOwners[i].value._links.self.href;

      for (const car of this.cars) {
        if (owner.dni == car.ownerDni) {
          ownerCar = car;
          ownerCar.ownerDni = null;
          this.carService.save(ownerCar);
        }
      }

      this.removeItemFromArr(owner);
      //este subscribe puede que de un error - averiguar por qué
      this.ownerService.remove(href).subscribe((error) => console.error(error));
    } */

  }
}
