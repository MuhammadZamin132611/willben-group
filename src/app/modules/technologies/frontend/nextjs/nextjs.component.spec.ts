import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextjsComponent } from './nextjs.component';

describe('NextjsComponent', () => {
  let component: NextjsComponent;
  let fixture: ComponentFixture<NextjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
