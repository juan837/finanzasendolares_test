import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../../models/user';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass'],
  providers: [ AuthService ]
})
export class FormLoginComponent implements OnInit {
  public loginForm: FormGroup;
  public user: User;
  public errorMessage;
  public alertRegister;
  public identity;

  constructor(
    private fb: FormBuilder, 
    private _authService: AuthService, 
    public snackBar: MatSnackBar) { 
    this.user = new User('','','','','','','');
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required]]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.user = form.value;

      console.log(this.user);

      this._authService.signin(this.user).subscribe(
        resp => {
          console.log('Respuesta ', resp);
          this.identity = resp.user;

          if (!this.identity._id) {
            this.openSnackBar(
              'Monto copiado al portapapeles', 
              'success'
            );
            alert('El usuario no esta correctamente identificado');
          } else {

          }

          this.loginForm.reset();
          this.alertRegister = resp.msg;
        },
        err => {
          console.log('Error ', err);
          const errorMessage = <any>err;

          if (errorMessage != null) {
            const body = JSON.parse(err._body);
            this.errorMessage = body.msg;
            console.log(err);
          }
        }
      );

    }
  }

  openSnackBar(message: string, style: string) {
    this.snackBar.open(message, '' , {
      duration: 2000,
      extraClasses: [style]
    });
  }

}