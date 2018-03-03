import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.sass'],
  providers: [ AuthService ]
})
export class ConfirmationComponent implements OnInit {
  public token;
  public errorMessage;
  public alertRegister;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.token = params['id'];

      this._authService.confirmation(this.token).subscribe(
        resp => {
          this.alertRegister = resp.msg;
        },
        err => {
          const errorMessage = <any>err;

          if (errorMessage != null) {
            const body = JSON.parse(err._body);
            console.log('Type ', body.type);
            this.errorMessage = body.msg;
            console.log('errorMessage ', this.errorMessage);
            console.log(err);
          }
        }
      );
    });
  }

}
