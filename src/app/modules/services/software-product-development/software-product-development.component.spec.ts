import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProductDevelopmentComponent } from './software-product-development.component';

describe('SoftwareProductDevelopmentComponent', () => {
  let component: SoftwareProductDevelopmentComponent;
  let fixture: ComponentFixture<SoftwareProductDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareProductDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareProductDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
