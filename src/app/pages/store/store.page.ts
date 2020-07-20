import { Component, OnInit } from '@angular/core';
import { IList } from 'src/app/shared/interfaces/List';

@Component({
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss']
})
export class StorePage implements OnInit {
  localItem: IList;

  listData: IList[] = [
    { id: 1, img: 'assets/images/store/small-termos.png', title: 'Название товара', button: 'Обменять', subDesc: '1500 шагов' },
    { id: 2, img: 'assets/images/store/small-termos.png', title: 'Название товара', button: 'Обменять', subDesc: '1500 шагов' },
    { id: 3, img: 'assets/images/store/small-termos.png', title: 'Название товара', button: 'Обменять', subDesc: '1500 шагов' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  setLocalItem(item) {
    this.localItem = item;
  }

}
