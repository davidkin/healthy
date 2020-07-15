import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent implements OnInit {
  @Input() id: number;
  @Input() titleCount: string;
  @Input() description: string;

  @Output() toNextSlide = new EventEmitter<any>();
  @Output() toPrevSlide = new EventEmitter<any>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onChangeNextSlide() {
    this.toNextSlide.emit();
  }

  onChangePrevSlide() {
    this.toPrevSlide.emit();
  }

  toAgreeDataReadPage() {
    this.router.navigate(['agree-read-data']);
  }

}
