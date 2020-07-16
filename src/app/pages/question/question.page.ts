import { Component, OnInit } from '@angular/core';
import { IList } from './../../shared/interfaces/List';

@Component({
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss']
})
export class QuestionPage implements OnInit {

  qaList: IList[] = [
    { img: 'assets/images/qa/apple.png', title: 'Питание' },
    { img: 'assets/images/qa/run.png', title: 'Название опроса' },
    { img: 'assets/images/qa/mind.png', title: 'Психология' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
