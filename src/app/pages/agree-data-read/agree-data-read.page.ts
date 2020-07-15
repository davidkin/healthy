import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './agree-data-read.page.html',
  styleUrls: ['./agree-data-read.page.scss']
})
export class AgreeDataReadPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toSignInPage() {
    this.router.navigate(['sign-in']);
  }
}
