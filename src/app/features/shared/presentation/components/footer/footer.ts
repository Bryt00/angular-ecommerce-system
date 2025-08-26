import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  socials=[
    {name: 'FaceBook', path: '/icons/socials/fb.svg'},
     {name: 'Instagram', path: '/icons/socials/ig.svg'},
      {name: 'X', path: '/icons/socials/twitter.svg'},
       {name: 'Whatsapp', path: '/icons/socials/watsap.svg'},
  ];
  paystacks=[
     {name: 'Visa', path: '/payment/visa.svg'},
     {name: 'Mastercard', path: '/payment/mastercard.svg'},
     {name: 'PayPal', path: '/payment/paypal.svg'},
     {name: 'ApplePay', path: '/payment/applepay.svg'},
     {name: 'GooglePay', path: '/payment/googlepay.svg'},
  ];

}
