import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/shared/interfaces/List';

@Component({
  templateUrl: './web-rf-created.page.html',
  styleUrls: ['./web-rf-created.page.scss']
})
export class WebRfCreatedPage implements OnInit {

  listData: IList[] = [
    { img: 'assets/images/qa/apple.png', title: 'Питание', subLink: 'Подробнее' },
    { img: 'assets/images/qa/run.png', title: 'Физ. aктивность', subLink: 'Подробнее' },
    { img: 'assets/images/qa/mind.png', title: 'Психология', subLink: 'Подробнее' },
    { img: 'assets/images/qa/apple.png', title: 'Питание', subLink: 'Подробнее' },
    { img: 'assets/images/qa/run.png', title: 'Физ. aктивность', subLink: 'Подробнее' },
    { img: 'assets/images/qa/mind.png', title: 'Психология', subLink: 'Подробнее' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
