import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../../environments/environment'

@Injectable()
export class AuthService {
  public url: string;

  constructor(private _http: Http) {
    this.url = environment.urlMicroServiceAuth;
  }

  // Login 
  signin(user_login, getHash = null) {
    if (getHash != null) {
      user_login.gethash = getHash;
    }

    const json = JSON.stringify(user_login);
    const params = json;

    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http
                .post(this.url + 'login', params, {headers: headers})
                .map(res => res.json());
  }
  // Register Post to Backend
  register(user_register) {
    const params = JSON.stringify(user_register);

    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http
                .post(this.url + 'register', params, {headers: headers})
                .map(res => res.json());
  }

  // Confirmation Post to Backend
  confirmation(token: string) {
    const params = JSON.stringify({ token: token });

    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http
                .post(this.url + 'confirmation', params, {headers: headers})
                .map(res => res.json());
  }

}
