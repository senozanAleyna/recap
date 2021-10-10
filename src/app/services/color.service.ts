import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl="https://localhost:44331/api/colors/getall"
  
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ColorResponseModel>{ //subscribe olunabilir bir responsible model döner
    return this.httpClient.get<ColorResponseModel>(this.apiUrl)
  }

}
