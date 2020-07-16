import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss']
})
export class PreviewPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  toSliderPage() {
    this.router.navigate(['slider']);
  }

}
