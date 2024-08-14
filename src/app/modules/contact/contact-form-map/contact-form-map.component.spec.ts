import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormMapComponent } from './contact-form-map.component';

describe('ContactFormMapComponent', () => {
  let component: ContactFormMapComponent;
  let fixture: ComponentFixture<ContactFormMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactFormMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
