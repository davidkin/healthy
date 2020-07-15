import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss']
})
export class SliderPage implements OnInit {
  slideOpts = {
    effect: 'flip',
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    centeredSlides: 1
  };

  constructor() { }

  ngOnInit(): void {
  }

}
