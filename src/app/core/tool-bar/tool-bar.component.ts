import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  @Input() public title: string;
  @Input() public openedSideBar: boolean;
  @Output() public toggle = new EventEmitter<boolean>();

  constructor(
    public storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  logout() {
    this.storageService.removeCurrentSession();
    this.router.navigate(['auth/login']);
  }
}
