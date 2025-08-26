import { Component } from '@angular/core';
//import { RouterLink } from '@angular/router';
import {AuthBtn} from '../../components/auth-btn/auth-btn';
@Component({
  selector: 'app-signup',
  imports: [AuthBtn],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

 googleBtn={name:'Sign up with Google', path:'/icons/socials/google.svg'}
  appleBtn={name:'Apple-Auth', path:'/icons/socials/apple.svg'}
}
