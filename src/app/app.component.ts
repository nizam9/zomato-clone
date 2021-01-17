import { Component, OnInit } from '@angular/core';
import {ServicesService} from './services.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'zomato-clone';
  categoriesList: any;

constructor(
  private _service:ServicesService
) {

}

ngOnInit() {
  this.getCategories();
}

async getLocationDetails() {
  const locationDet =  await this._service.getLocation('hsr sector3').toPromise()
  console.log(locationDet , 'locationDet');
}

async getCategories(){
  const categories = await this._service.getCategories().toPromise();
  console.log(categories , 'categories');
  this.categoriesList = categories.categories;
}


}
