import { Injectable } from '@angular/core';
import { Unit } from 'src/models/Units';

@Injectable({
  providedIn: 'root'
})
export class UnitState {
  state: 'metric' | 'imperial' = 'metric';

  constructor() { }

  switchState(unit: Unit) {
    this.state = unit;
  }
}

