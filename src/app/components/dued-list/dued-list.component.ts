import { Component } from '@angular/core';
import { Dued } from '../../components/dued';

@Component({
  selector: 'app-dued-list',
  templateUrl: './dued-list.component.html',
  styleUrls: ['./dued-list.component.css']
})
export class DuedListComponent {

  dueds: Dued[];
  dueds_temp: string;

  dued_inprogress: Dued;

  constructor() {
    this.dued_inprogress = Dued.createBlank();
    this.dueds_temp = localStorage.getItem('dueds');
    if (this.dueds_temp != null) {
      this.dueds = JSON.parse(this.dueds_temp);
    } else {
      this.dueds = [
        new Dued('2018-10-04', 'Airtel Mobile test', 'Monthly', 'Celphone'),
      ];
    }
  }

  public addDuedClicked() {
    console.log(JSON.stringify(this.dued_inprogress, null, null));
    this.dueds.unshift(this.dued_inprogress);
    this.dued_inprogress = Dued.createBlank();
    localStorage.setItem('dueds', JSON.stringify(this.dueds));
  }

}
