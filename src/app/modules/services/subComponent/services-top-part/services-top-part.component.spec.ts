import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesTopPartComponent } from './services-top-part.component';

describe('ServicesTopPartComponent', () => {
  let component: ServicesTopPartComponent;
  let fixture: ComponentFixture<ServicesTopPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesTopPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesTopPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
