import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDto } from '../models/dto/carDto';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44331/api/"
  
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDto>>{ //subscribe olunabilir bir responsible model döner
    let newPath =this.apiUrl +"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDto>>{ //subscribe olunabilir bir responsible model döner
    let newPath =this.apiUrl +"cars/getcarsbybrandidwithdetails?brandid="+brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDto>>{ //subscribe olunabilir bir responsible model döner
    let newPath =this.apiUrl +"cars/getcarsbycoloridwithdetails?colorid="+colorId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  getCarsByFilter(brandId:number, colorId:number):Observable<ListResponseModel<CarDto>>{ //subscribe olunabilir bir responsible model döner
    let newPath = this.apiUrl + 'cars/getcarsbyfilterwithdetails?brandid=' + brandId + "&colorid=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
  }

  getCarDetail(carId:number):Observable<SingleResponseModel<CarDto>>{
    let newPath = this.apiUrl + 'cars/getcardetailbyid?id='+carId;
    return this.httpClient.get<SingleResponseModel<CarDto>>(newPath)
  }

}