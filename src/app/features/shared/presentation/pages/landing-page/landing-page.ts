import { Component } from '@angular/core';
import {TextBtn} from "../../components/text-btn/text-btn";


@Component({
  selector: 'app-landing-page',
  imports: [TextBtn],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

label:string = "Shop Now";
}
