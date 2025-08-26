import { Component, Injectable, Input } from '@angular/core';

@Component({
  selector: 'app-auth-btn',
  imports: [],
  templateUrl: './auth-btn.html',
  styleUrl: './auth-btn.css'
})
@Injectable()
export class AuthBtn {

  @Input() btnName:string;
  @Input() iconUrl?:string;
  isApple?:boolean;
  
 

}
