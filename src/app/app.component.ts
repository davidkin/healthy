import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  showSubMenu = false;
  curentId: number;

  menuItems = [
    { id: 1, title: 'Личный кабинет' },
    { id: 2, title: 'Программы' },
    {
      id: 3,
      title: 'Задания',
      subMenu: [
        { id: 3.1, title: 'Групповые задания', count: 0},
        { id: 3.2, title: 'Индивидуальные', count: 2}
      ]
    },
    {
      id: 4,
      title: 'Лидерборд',
      subMenu: [
        { id: 4.1, title: 'Индивидуальные', count: 1},
      ]
    },
    {
      id: 5,
      title: 'Новости',
      subMenu: [
        { id: 5.1, title: 'Индивидуальные', count: 2},
      ]
    },
    { id: 6, title: 'Календарь' },
    { id: 7, title: 'Опросы' },
    { id: 8, title: 'Магазин' },
    { id: 9, title: 'Чат поддержки' },
    { id: 10, title: 'Настройки профиля' },
    { id: 11, title: 'Выход' },
  ];

  constructor(
    private menu: MenuController
  ) { }

  initializeApp() { }

  ngOnInit() { }

  closeMenu() {
    this.menu.close();
  }

  isSameItem(id): boolean {
    return this.curentId === id;
  }

  toggleSubMenu(item) {
    this.curentId = item.id;
    this.showSubMenu = !this.showSubMenu;
  }
}
