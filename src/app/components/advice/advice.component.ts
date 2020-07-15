import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss']
})
export class AdviceComponent implements OnInit {
  @Input() id: number;
  @Input() titleCount: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
