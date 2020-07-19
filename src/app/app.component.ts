import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  menuItems = [
    { id: 1, title: 'Личный кабинет' },
    { id: 2, title: 'Программы' },
    { id: 3, title: 'Задания' },
    { id: 4, title: 'Лидерборд' },
    { id: 5, title: 'Новости' },
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
}
