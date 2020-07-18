import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/shared/interfaces/List';

@Component({
  templateUrl: './group-task.page.html',
  styleUrls: ['./group-task.page.scss']
})
export class GroupTaskPage implements OnInit {

  listData: IList[] = [
    { img: 'assets/images/qa/apple.png', title: 'Питание', subLink: 'Подробнее', note: '7' },
    { img: 'assets/images/qa/run.png', title: 'Физ. aктивность', subLink: 'Подробнее', note: '3' },
    { img: 'assets/images/qa/mind.png', title: 'Психология', subLink: 'Подробнее', note: '8' },
    { img: 'assets/images/qa/apple.png', title: 'Питание', subLink: 'Подробнее', note: '10' },
    { img: 'assets/images/qa/run.png', title: 'Физ. aктивность', subLink: 'Подробнее', note: '9' },
    { img: 'assets/images/qa/mind.png', title: 'Психология', subLink: 'Подробнее', note: '1' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
