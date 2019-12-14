import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.css']
})

@Input('color') public color: string;

export class TestButtonComponent implements OnInit {
   public color: string;

  constructor() {
  	this.color = this.generateRandomColor();
  }

  ngOnInit() {
  }

  generateRandomColor(){
  	return '#' +((Math.random()*0xffffff) << 0).toString(16)
  }

}
