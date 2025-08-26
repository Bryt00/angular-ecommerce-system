import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListings } from './product-listings';

describe('ProductListings', () => {
  let component: ProductListings;
  let fixture: ComponentFixture<ProductListings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
