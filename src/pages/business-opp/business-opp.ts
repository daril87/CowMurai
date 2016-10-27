import { Component } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  templateUrl: 'business-opp.html'
})
export class BusinessOppPage {
  mySlideOptions = {
  		autoplay: 1000,
		initialSlide: 0,
		speed: 5000,
		loop: true
  };
  
  constructor() {
	
  }
}
