import { Component, OnInit } from '@angular/core';
import { ScreenDetectorService } from '../../../../../../../libs/mz/screen-detector/src/service/screen-detector.service';

@Component({
  selector: 'connect-web-base-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.scss']
})
export class LkComponent implements OnInit {
  constructor() // private a: ScreenDetectorService
  {}

  ngOnInit() {
    // this.a.subscription$.subscribe(value => {});
  }
}
