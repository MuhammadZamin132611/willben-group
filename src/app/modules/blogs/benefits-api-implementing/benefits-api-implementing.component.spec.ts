import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsApiImplementingComponent } from './benefits-api-implementing.component';

describe('BenefitsApiImplementingComponent', () => {
  let component: BenefitsApiImplementingComponent;
  let fixture: ComponentFixture<BenefitsApiImplementingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenefitsApiImplementingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BenefitsApiImplementingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
