import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {


  brands:Brand[]=[];
  dataLoaded=false;
  currentBrand:Brand={brandId:0,brandName:""};
  constructor(private brandService:BrandService) { } //service kullanımını sağlar

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{//senkron çalışma sağlar
      this.brands=response.data //data eşleşmesi sağlanıyorsa subscribe edilir
      this.dataLoaded=true;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
