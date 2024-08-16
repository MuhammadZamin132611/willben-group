import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaFutureComponent } from './java-future.component';

describe('JavaFutureComponent', () => {
  let component: JavaFutureComponent;
  let fixture: ComponentFixture<JavaFutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaFutureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JavaFutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
