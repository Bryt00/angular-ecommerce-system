import { Component} from '@angular/core';
import {TextBtn} from "../../components/text-btn/text-btn";
import path from 'node:path';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ProductListings } from '../../../../../core/components/product-listings/product-listings';

@Component({
  selector: 'app-landing-page',
  imports: [TextBtn, CommonModule, ProductListings,RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

label:string = "Shop Now";
brands = [
  {name:'Versace', path:'/icons/brands/brand1.svg'},
   {name:'Zara', path:'/icons/brands/brand2.svg'},
    {name:'Gucci', path:'/icons/brands/brand3.svg'},
     {name:'Prada', path:'/icons/brands/brand4.svg'},
      {name:'Calvin Klein', path:'/icons/brands/brand5.svg'},
];
}
