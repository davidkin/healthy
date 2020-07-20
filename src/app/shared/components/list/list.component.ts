import { Component, OnInit, Input } from '@angular/core';
import { IList } from '../../interfaces/List';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: IList[] = [];
  @Input() customImgStyles?;
  @Input() customLabelStyles?;
  @Input() showLastBorder = true;

  constructor() { }

  ngOnInit(): void {
  }

  testClick() {
    console.log('test');
  }

}
