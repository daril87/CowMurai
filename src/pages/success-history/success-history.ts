import { Component } from '@angular/core';
import { Slides } from 'ionic-angular';


@Component({
  templateUrl: 'success-history.html'
})
export class SuccessHistoryPage {
  mySlideOptions = {
  		autoplay: 1000,
		initialSlide: 0,
		speed: 3000,
		loop: true
  };
  
  constructor() {
	
  }
}
