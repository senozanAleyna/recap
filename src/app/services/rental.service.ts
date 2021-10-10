import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rentalDtoResponseModel } from '../models/dto/rentalDtoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44331/api/rentals/getrentaldetails"
  
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<rentalDtoResponseModel>{ //subscribe olunabilir bir responsible model döner
    return this.httpClient.get<rentalDtoResponseModel>(this.apiUrl)
  }

}