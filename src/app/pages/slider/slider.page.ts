import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss']
})
export class SliderPage implements OnInit {
  @ViewChild('slider') slideElm: IonSlides;

  slideOpts = {
    effect: 'flip',
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    centeredSlides: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
      clickable: true,
      renderCustom: (swiper, index, slidesCount) => {
        return this.customBullet(swiper, index, slidesCount);
      }
    }
  };

  slides = [
    { id: 1, title: '01', advice: 'Дайте разрешение<br>на геопозицию и передвижение'},
    { id: 2, title: '02', advice: 'Дайте разрешение<br>на дополнительную установку<br>Google Fit или на считывание<br>уже установленного<br>по умолчанию приложения<br>(данных)'},
    { id: 3, title: '03', advice: 'Дайте разрешение<br>на считывание данных<br>из Apple Health'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  slideToNextAdvice() {
    this.slideElm.slideNext();
  }

  private customBullet(swiper, index: number, slidesCount: number): string {
    const bulletStyle = [
      'margin: 0 8px;',
      'border: 1px solid #0360aa;',
      'width: 15px;',
      'height: 15px;', 'opacity: 1;',
      'display: inline-block;',
      'border-radius: 100%'
    ];
    const bulletClasses = ['swiper-pagination-bullet']; // 'swiper-pagination-bullet-active'
    const bulletBar = `<span class='${bulletClasses.join(' ')}' style='${bulletStyle.join(' ')}'></span>`;

    const bulletContainerStlyes = [
      'position: absolute;',
      'text-align: center;',
      'transform: translate3d(0, 0, 0);',
      'z-index: 10;',
      'bottom: 70px !important;',
      'width: 100%'
    ];
    let bulletContainer = `<div class='swiper-pagination' style='${bulletContainerStlyes.join(' ')}'>`;

    for (let i = 1; i <= slidesCount; i++) {
      bulletContainer += bulletBar;
    }

    const finalContainer = bulletContainer + '</span></div>';

    return finalContainer;
  }
}
