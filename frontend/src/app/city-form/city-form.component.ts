import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    var pokeurl = "https://pokeapi.co/api/v2/pokemon/"+x;
    fetch(pokeurl)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
    })
    .catch(() => {
      console.log('Pokemon does not exist')
    })
  }
}
