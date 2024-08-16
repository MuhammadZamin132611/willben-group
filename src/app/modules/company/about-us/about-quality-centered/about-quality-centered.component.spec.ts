import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutQualityCenteredComponent } from './about-quality-centered.component';

describe('AboutQualityCenteredComponent', () => {
  let component: AboutQualityCenteredComponent;
  let fixture: ComponentFixture<AboutQualityCenteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutQualityCenteredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutQualityCenteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
