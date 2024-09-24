import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestJsComponent } from './nest-js.component';

describe('NestJsComponent', () => {
  let component: NestJsComponent;
  let fixture: ComponentFixture<NestJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NestJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
