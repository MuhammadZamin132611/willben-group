import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainPlatformComponent } from './explain-platform.component';

describe('ExplainPlatformComponent', () => {
  let component: ExplainPlatformComponent;
  let fixture: ComponentFixture<ExplainPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplainPlatformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplainPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
