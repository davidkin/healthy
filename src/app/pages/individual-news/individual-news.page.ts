import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/shared/interfaces/List';

@Component({
  templateUrl: './individual-news.page.html',
  styleUrls: ['./individual-news.page.scss']
})
export class IndividualNewsPage implements OnInit {

  listData: IList[] = [
    { img: 'assets/images/qa/apple.png', title: 'Рациональное питание -  основа здоровья и благополучия', subTitle: 'Урок 1' },
    { img: 'assets/images/qa/apple.png', title: 'Физиология пищеварительной системы', subTitle: 'Урок 2' },
    { img: 'assets/images/qa/apple.png', title: 'Рацион и режим питания', subTitle: 'Урок 3' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
