import { Component, OnInit, Input } from '@angular/core';
import { IList } from './../../shared/interfaces/List';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: IList[] = [];
  @Input() customImgStyles?;

  constructor() { }

  ngOnInit(): void {
  }

  testClick() {
    console.log('test');
  }

}
