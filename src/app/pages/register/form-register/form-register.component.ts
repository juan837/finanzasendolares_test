import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../../models/user';
import { AuthService } from '../../../shared/services/auth.service';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.sass'],
  providers: [ AuthService ]
})
export class FormRegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public user: User;
  public errorMessage;
  public alertRegister;

  constructor(private fb: FormBuilder, private _authService: AuthService) { 
    this.user = new User('','','','','','','');
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [this.user.name, [Validators.required]],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: [this.user.password, [Validators.required]]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.user = form.value;

      this._authService.register(this.user).subscribe(
        resp => {
          console.log('Respuesta ', resp);
          this.registerForm.reset();
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

      console.log('Form ', this.user);
    }
  }

}
