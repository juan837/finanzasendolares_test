import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  public environmentName = environment.envName;

  constructor() { }

  ngOnInit() {
  }

}
