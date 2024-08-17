import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesPlatformComponent } from './technologies-platform.component';

describe('TechnologiesPlatformComponent', () => {
  let component: TechnologiesPlatformComponent;
  let fixture: ComponentFixture<TechnologiesPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologiesPlatformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologiesPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
