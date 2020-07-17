import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/shared/interfaces/List';

@Component({
  templateUrl: './group-task.page.html',
  styleUrls: ['./group-task.page.scss']
})
export class GroupTaskPage implements OnInit {

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
