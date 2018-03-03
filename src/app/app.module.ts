import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule, Jsonp } from '@angular/http';
import { HttpModule } from '@angular/http';

// Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';


import { AppComponent } from './app.component';
import { CommingComponent } from './pages/index/comming/comming.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

import { routing, appRoutingProviders } from './app.routing';
import { BooksComponent } from './pages/index/books/books.component';
import { PaypalCalcComponent } from './pages/paypal-calc/paypal-calc.component';
import { CalculateComponent } from './pages/paypal-calc/calculate/calculate.component';

// External Reference
import { ClipboardModule } from 'ngx-clipboard';
import { SubscribeComponent } from './shared/subscribe/subscribe.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormRegisterComponent } from './pages/register/form-register/form-register.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { FormLoginComponent } from './pages/login/form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CommingComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    PaypalCalcComponent,
    CalculateComponent,
    SubscribeComponent,
    LoginComponent,
    RegisterComponent,
    FormRegisterComponent,
    ConfirmationComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatProgressBarModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatListModule,
    ClipboardModule,
    routing,
    ReactiveFormsModule,
    JsonpModule,
    HttpModule
  ],
  exports: [
    // MatToolbarModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
