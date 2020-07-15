import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent implements OnInit {
  @Input() id: number;
  @Input() titleCount: string;
  @Input() description: string;

  @Output() toNextSlides = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSlide() {
    this.toNextSlides.emit();
  }

}
