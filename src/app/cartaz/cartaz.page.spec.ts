import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartazPage } from './cartaz.page';

describe('CartazPage', () => {
  let component: CartazPage;
  let fixture: ComponentFixture<CartazPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartazPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
