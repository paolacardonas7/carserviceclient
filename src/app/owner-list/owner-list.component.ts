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

  remove(selctedOwners) {
    for (const selctedOwner of selctedOwners) {
      var href = selctedOwner.value._links.self.href;
      this.ownerService.remove(href, selctedOwner.dni).subscribe((error) => console.error(error));
    }
    window.location.reload();
  }
}
