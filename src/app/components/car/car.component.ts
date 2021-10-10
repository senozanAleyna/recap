import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDto } from 'src/app/models/dto/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:CarDto[]=[]
  constructor(private carService:CarService, private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
        
      }
      else{
        this.getCars()
      }

    })
  }
  getCars(){
    this.carService.getCars().subscribe(response=>{//senkron çalışma sağlar
      this.cars=response.data //data eşleşmesi sağlanıyorsa subscribe edilir
    })
  }
  carDetailsRoute(id:number){
    this.router.navigate(["cars/details/"+id], { replaceUrl: true });
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data 
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data 
    })
  }

  getCarsByFilter(brandId:number, colorId:number){
    this.carService.getCarsByFilter(brandId,colorId).subscribe(response=>{
      this.cars = response.data;
    })
  }

}
