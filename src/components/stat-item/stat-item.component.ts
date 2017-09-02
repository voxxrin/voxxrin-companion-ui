import { Component, Input } from '@angular/core';

/**
 * Generated class for the StatsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'stat-item-component',
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
