import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTopPartComponent } from './contact-top-part.component';

describe('ContactTopPartComponent', () => {
  let component: ContactTopPartComponent;
  let fixture: ComponentFixture<ContactTopPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactTopPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactTopPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
