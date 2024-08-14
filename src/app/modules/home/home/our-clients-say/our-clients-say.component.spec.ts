import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientsSayComponent } from './our-clients-say.component';

describe('OurClientsSayComponent', () => {
  let component: OurClientsSayComponent;
  let fixture: ComponentFixture<OurClientsSayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurClientsSayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurClientsSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
