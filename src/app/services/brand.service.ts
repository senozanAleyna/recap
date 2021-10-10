import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BrandResponseModel } from '../models/brandResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44331/api/brands/getall"
  
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandResponseModel>{ //subscribe olunabilir bir responsible model döner
    return this.httpClient.get<BrandResponseModel>(this.apiUrl)
  }

}
