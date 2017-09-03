import { Component, Input } from '@angular/core';

@Component({
  selector: 'stat-item',
  templateUrl: 'stat-item.component.html'
})
export class StatItemComponent {

  @Input() iconName: string;
  @Input() titleName: string;
  @Input() titleInfoCount: number;
  @Input() titleInfoName: string;

  constructor() {
  }

}
