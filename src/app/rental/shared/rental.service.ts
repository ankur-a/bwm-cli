import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../shared/rental.model'
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService{
    
    constructor(private http: HttpClient){}

    public getRentals(): any {
        return this.http.get('/api/v1/rentals');
    }

    public getRentalById(rentalId: string): any{
        return this.http.get('/api/v1/rentals/' + rentalId)||new Rental();
    }
       
}