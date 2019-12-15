import { Component, OnInit, Input } from '@angular/core';
import { CityFormComponent } from '../city-form.component';

@Component({
  selector: 'app-display-weaher',
  templateUrl: './display-weaher.component.html',
  styleUrls: ['./display-weaher.component.scss']
})
export class DisplayWeaherComponent implements OnInit {

  @Input() pooti: String;
  constructor() { }

  ngOnInit() {
  }

}
