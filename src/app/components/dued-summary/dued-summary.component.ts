import { Component, Input } from '@angular/core';
import { Dued } from '../../components/dued';

@Component({
  selector: 'app-dued-summary',
  templateUrl: './dued-summary.component.html',
  styleUrls: ['./dued-summary.component.css']
})
export class DuedSummaryComponent {

  @Input()
  dued: Dued;
  constructor() { }

}
