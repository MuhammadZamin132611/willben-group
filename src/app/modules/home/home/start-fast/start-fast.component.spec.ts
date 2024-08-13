import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFastComponent } from './start-fast.component';

describe('StartFastComponent', () => {
  let component: StartFastComponent;
  let fixture: ComponentFixture<StartFastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartFastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
