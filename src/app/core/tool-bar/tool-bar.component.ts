import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  @Input()
  title: string;

  constructor(public storageService: StorageService) { }

  ngOnInit() {
  }

}
