import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  category:any = "day";
  gaugeLabel = "Puntos";
  gaugePrependText = ""
  gaugeType = "arch";
  gaugeValue = 100;

  constructor() {}


  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2,
  };

  imagen = [
    'assets/producto1.jpeg',
    'assets/producto2.jpeg',
    'assets/producto3.jpeg'
  ]

}
