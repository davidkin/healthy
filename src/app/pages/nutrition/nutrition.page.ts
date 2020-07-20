import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/shared/interfaces/List';

@Component({
  templateUrl: './nutrition.page.html',
  styleUrls: ['./nutrition.page.scss']
})
export class NutritionPage implements OnInit {
  listData: IList[] = [
    { img: 'assets/images/nutrition/medal.png', title: 'Название команды', button: 'Вступить', subDesc: '582465 баллов' },
    { img: 'assets/images/nutrition/medal.png', title: 'Название команды', button: 'Вступить', subDesc: '582465 баллов' },
    { img: 'assets/images/nutrition/medal.png', title: 'Название команды', button: 'Вступить', subDesc: '582465 баллов' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
