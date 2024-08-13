import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWeOfferComponent } from './services-we-offer.component';

describe('ServicesWeOfferComponent', () => {
  let component: ServicesWeOfferComponent;
  let fixture: ComponentFixture<ServicesWeOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesWeOfferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesWeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
