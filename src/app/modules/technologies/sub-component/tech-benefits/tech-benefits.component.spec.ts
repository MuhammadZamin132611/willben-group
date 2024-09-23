import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBenefitsComponent } from './tech-benefits.component';

describe('TechBenefitsComponent', () => {
  let component: TechBenefitsComponent;
  let fixture: ComponentFixture<TechBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechBenefitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
