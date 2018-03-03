import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Jsonp} from '@angular/http';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.sass']
})
export class SubscribeComponent implements OnInit {
  public suscribeForm: FormGroup;
  public suscribeReady: Boolean = false;
  // public jsonp: Jsonp;

  constructor(
    private fb: FormBuilder,
    private jsonp:Jsonp,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.suscribeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      var url = 'https://finanzaspersonales.us17.list-manage.com/subscribe/post-json?u=04a0722f4de4d6daefc11bb4d&id=2efc2e4628&subscribe=Subscribe&FNAME=' + form.value.name + '&EMAIL=' + form.value.email +'&c=JSONP_CALLBACK';
      this.jsonp.request(url, { method: 'Get' })
           .subscribe((res) => {
             if(res.json().result == 'success') {
              this.openSnackBar(
                'Tu suscripción fue correcta, proximamente recibiras información de nosotros',
                'success'
              );

              form.reset();
              form.markAsUntouched();
              let control: AbstractControl = null;
              Object.keys(form.controls).forEach((name) => {
                control = form.controls[name];
                control.setErrors(null);
              });
             } else {
              this.openSnackBar(
                'Intenta de nuevo o verifica si ya te suscribiste',
                'warning'
              );
             }
            
            //  this.result = res.json() 
            });
    }
  }

  openSnackBar(message: string, style: string) {
    this.snackBar.open(message, '' , {
      duration: 5000,
      extraClasses: [style]
    });
  }

}
