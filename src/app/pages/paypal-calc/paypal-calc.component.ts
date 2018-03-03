import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-paypal-calc',
  templateUrl: './paypal-calc.component.html',
  styleUrls: ['./paypal-calc.component.sass']
})
export class PaypalCalcComponent implements OnInit, OnDestroy {
  public paypalPorcent = 5.4;
  public paypalDolar = 0.30;
  public textToCopy = '';
  public showLoading = true;

  // income money
  public incomeMoney: number = null;
  public incomeMoneyTotal;
  public incomeMoneyComision;

  // send money
  public sendMoney: number = null;
  public sendMoneyTotal;
  public sendMoneyComision;

  private subscription: Subscription;
  private timer: Observable<any>;

  constructor(
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if ( this.subscription && this.subscription instanceof Subscription) {
      this.subscription.unsubscribe();
    }
  }

  pushSendCalc() {
    const toChargeCalc = ((this.sendMoney * this.paypalPorcent) / 100) + this.paypalDolar;
    const toChargeRound = Math.round(toChargeCalc * 100) / 100;
    const toRecivedCalc = this.sendMoney - toChargeRound;

    this.sendMoneyTotal = toRecivedCalc;
    this.sendMoneyComision = toChargeRound;
  }

  pushIncomeCalc() {
    // this.setTimer();

    const toChargeCalc = 100 * ( this.paypalDolar +  this. incomeMoney ) / (( 0 - this.paypalPorcent ) + 100);
    const totalSend = Math.round(toChargeCalc * 100) / 100;

    const fee = totalSend - this.incomeMoney;

    const totalFee = Math.round(fee * 100) / 100;

    this.incomeMoneyTotal = totalSend;
    this.incomeMoneyComision = totalFee;
  }

  copyToClipboard(text) {
    this.textToCopy = text.toString().split('.').join(',');
    const result = this.copyTextToClipboard(this.textToCopy);
    if (result) {
      this.openSnackBar(
        'Monto copiado al portapapeles', 
        'success'
      );
    }
  }

  copyTextToClipboard(text) {
    const txtArea = document.createElement('textarea');
    txtArea.style.position = 'fixed';
    txtArea.style.top = '0';
    txtArea.style.left = '0';
    txtArea.style.opacity = '0';
    txtArea.value = text;
    document.body.appendChild(txtArea);
    txtArea.select();
    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        if (successful) {
            return true;
        }
    } catch (err) {
        this.openSnackBar(
          'Intenta de nuevo, problema al copiar', 
          'warning'
        );
    }
    document.body.removeChild(txtArea);
    return false;
}

  clean() {
    // Global Vars
    this.paypalPorcent = 5.3;
    this.paypalDolar = 0.3;

    this.cleanIncome();
    this.cleanSend();
  }

  cleanIncome() {
    // Income Money
    this.incomeMoney = null;
    this.incomeMoneyTotal = '';
    this.incomeMoneyComision = '';
  }

  cleanSend() {
    // Send Money
    this.sendMoney = null;
    this.sendMoneyTotal = null;
    this.sendMoneyComision = null;
  }

  openSnackBar(message: string, style: string) {
    this.snackBar.open(message, '' , {
      duration: 2000,
      extraClasses: [style]
    });
  }

  setTimer() {

    // set showloader to true to show loading div on view
    this.showLoading   = false;

    this.timer        = Observable.timer(2000); // 5000 millisecond means 5 seconds
    this.subscription = this.timer.subscribe(() => {
        // set showloader to false to hide loading div from view after 5 seconds
        this.showLoading = true;
    });
  }
}
