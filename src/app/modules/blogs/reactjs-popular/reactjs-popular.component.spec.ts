import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactjsPopularComponent } from './reactjs-popular.component';

describe('ReactjsPopularComponent', () => {
  let component: ReactjsPopularComponent;
  let fixture: ComponentFixture<ReactjsPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactjsPopularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactjsPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
