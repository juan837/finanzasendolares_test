import { Component, OnInit } from '@angular/core';
import { constants } from '../../../app.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  public constants = constants;
  constructor() { }

  ngOnInit() {
  }

}
