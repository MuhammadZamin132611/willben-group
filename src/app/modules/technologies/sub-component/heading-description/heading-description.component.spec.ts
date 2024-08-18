import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingDescriptionComponent } from './heading-description.component';

describe('HeadingDescriptionComponent', () => {
  let component: HeadingDescriptionComponent;
  let fixture: ComponentFixture<HeadingDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingDescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
