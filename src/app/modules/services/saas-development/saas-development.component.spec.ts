import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasDevelopmentComponent } from './saas-development.component';

describe('SaasDevelopmentComponent', () => {
  let component: SaasDevelopmentComponent;
  let fixture: ComponentFixture<SaasDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaasDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaasDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
