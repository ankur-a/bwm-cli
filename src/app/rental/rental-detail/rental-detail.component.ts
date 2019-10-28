import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rentalId: string;
  rental: Rental;
  constructor(private route: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    this.rental = new Rental();
    this.route.params.subscribe(
      (params) => {
        this.rentalId = params['rentalId'];
        this.getRental(this.rentalId);
      }
    )
  }

  getRental(rentalId: string){
      this.rentalService.getRentalById(rentalId).subscribe(
        (rental: Rental) => { this.rental = rental },
        (err) => {},
        () => {}
      );
  }

}
