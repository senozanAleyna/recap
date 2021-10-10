import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarDto } from 'src/app/models/dto/carDto';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  dataLoaded:boolean=false
  car:CarDto
  carImages:CarImage[];
  imageBase ="https://localhost:44331/"
  
  constructor(private carService:CarService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetails(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }

  getCarDetails(carId:number)
  {
    this.carService.getCarDetail(carId).subscribe(response => {
      this.car = response.data;
      console.log(this.car)
      this.dataLoaded=true
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
     this.carImages=response.data;
     console.log(this.carImages)
    })
     
  }

  getBack(){
    this.carService.getCars();
  }

  getActiveImageClass(carImage:CarImage){
    if (carImage===this.carImages[0]) {
      return "active"
    } else {
      return ""
    }
  }

}
