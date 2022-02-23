import { Component, OnInit } from '@angular/core';
import { UnitState } from 'src/services/states/unit-state.service';

@Component({
  selector: 'app-unit-toggle',
  templateUrl: './unit-toggle.component.html',
  styleUrls: ['./unit-toggle.component.scss'],
})
export class UnitToggleComponent implements OnInit {

  constructor(public unitState: UnitState) { }

  ngOnInit() {}

  unitToggled(ev: any) {
    this.unitState.switchState(ev);
  }
}
