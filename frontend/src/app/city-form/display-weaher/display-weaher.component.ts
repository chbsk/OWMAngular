import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CityFormComponent } from '../city-form.component';

@Component({
  selector: 'app-display-weaher',
  templateUrl: './display-weaher.component.html',
  styleUrls: ['./display-weaher.component.scss']
})
export class DisplayWeaherComponent implements OnChanges {

  @Input() cityName: String;
  weatherMain;
  mainTemp;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    // var cityURL = 'https://pokeapi.co/api/v2/pokemon/' + this.cityName;
    if(this.cityName != null){
      var cityURL = 'http://api.openweathermap.org/data/2.5/weather?q='+this.cityName+'&units=metric&APPID=fc4b9a5697b227f5f122c89835bbd09e'
      fetch(cityURL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.weatherMain = JSON.stringify(data.weather[0].main);
        this.mainTemp = JSON.stringify(data.main.temp);
        console.log(this.weatherMain);
      })
      .catch(err => {
        console.log('Pokemon Does Not Exist');
      })
    }
  }
}
