import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSoftwareDevelopmentComponent } from './customer-software-development.component';

describe('CustomerSoftwareDevelopmentComponent', () => {
  let component: CustomerSoftwareDevelopmentComponent;
  let fixture: ComponentFixture<CustomerSoftwareDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSoftwareDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerSoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
