import { Component,Input,OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-listings',
  imports: [CommonModule],
  templateUrl: './product-listings.html',
  styleUrl: './product-listings.css'
})
export class ProductListings implements OnInit{
  @Input() filter: 'new-arrivals'|'top-selling';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  ratingStars = Array(5).fill(0);
  Math = Math;
  constructor(){}

    ngOnInit(): void {
       this.products = [
        {
            id: 1, name: "T-SHIRT WITH TAPE DETAILS",
            price: 20, ratings:4, imageUrl: '/img/top.png', isNew:false, isTopSelling:true
        },
         {
            id: 1, name: "CHECKERED SHIRT",
            price: 20, ratings:4, imageUrl: '/img/long-shirt.png', isNew:true, isTopSelling:false
        },
         {
            id: 1, name: "COURAGE GRAPHIC T-SHIRT",
            price: 20, ratings:4, imageUrl: '/img/green-top.png', isNew:false, isTopSelling:true
        },
         {
            id: 1, name: "SKINNY FIT JEANS",
            price: 20, ratings:4, imageUrl: '/img/jeans-pants.png', isNew:true, isTopSelling:true
        },
        {
            id: 2, name: "T-SHIRT WITH TAPE DETAILS",
            price: 20, ratings:4.5, imageUrl: '/img/top.png'
        },
        {
            id: 3, name: "Polo with Contrast Trims",
            price: 100, ratings:2.5, imageUrl: '/img/blue-top.png', isNew:true, isTopSelling:false
        }
       ];
       this.applyFilter();
    }
    ngOnChanges(){
      this.applyFilter();
    }
private applyFilter(){
  switch(this.filter){
  case 'new-arrivals':
    this.filteredProducts = this.products.filter(p=>p.isNew);
    break;
  case 'top-selling':
    this.filteredProducts = this.products.filter(p=>p.isTopSelling);
    break;
  default:
    this.filteredProducts = this.products;
  }
}
}
