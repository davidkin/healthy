import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/shared/interfaces/List';

@Component({
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss']
})
export class NutritionPage implements OnInit {
  listData: IList[] = [
    { img: 'assets/images/qa/apple.png', title: 'Рациональное питание -  основа здоровья и благополучия', subTitle: 'Урок 1' },
    { img: 'assets/images/qa/apple.png', title: 'Физиология пищеварительной системы', subTitle: 'Урок 2' },
    { img: 'assets/images/qa/apple.png', title: 'Рацион и режим питания', subTitle: 'Урок 3' },
    { img: 'assets/images/qa/apple.png', title: 'Оценка состояния питания', subTitle: 'Урок 4' },
    { img: 'assets/images/qa/apple.png', title: 'Питание при хронических заболеваниях', subTitle: 'Урок 5' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
