import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Unit } from 'src/models/Units';

@Component({
  selector: 'app-unit-toggle',
  templateUrl: './unit-toggle.component.html',
  styleUrls: ['./unit-toggle.component.scss'],
})
export class UnitToggleComponent implements OnInit {

  @Output() switchUnitEvent = new EventEmitter<Unit>();

  constructor() { }

  ngOnInit() {}

  unitToggled(ev: any) {
    this.switchUnitEvent.emit(ev);
  }
}
