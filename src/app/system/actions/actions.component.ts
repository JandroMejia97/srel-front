import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  public cantItems = 25;
  public filterText = '';
  @Output() public sendCantItems = new EventEmitter<number>();
  @Output() public sendFilterText = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
