import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCardServiceComponent } from './single-card-service.component';

describe('SingleCardServiceComponent', () => {
  let component: SingleCardServiceComponent;
  let fixture: ComponentFixture<SingleCardServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCardServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleCardServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
