import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  @Input() @Output()
  public openedSideBar: boolean;
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
