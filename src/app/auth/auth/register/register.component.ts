import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() public form: FormGroup;
  @Output() public submit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
