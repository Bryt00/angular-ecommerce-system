import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBtn } from './text-btn';

describe('TextBtn', () => {
  let component: TextBtn;
  let fixture: ComponentFixture<TextBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
