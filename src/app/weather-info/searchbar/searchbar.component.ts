import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {
  @Input() initialLocation: string;
  @Output() searchEvent = new EventEmitter<string>();

  newLocation: string;

  ngOnInit() { }

  searchClicked() {
    this.searchEvent.emit(this.newLocation);
  }
}
