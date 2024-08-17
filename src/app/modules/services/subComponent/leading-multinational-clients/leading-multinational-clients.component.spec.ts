import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingMultinationalClientsComponent } from './leading-multinational-clients.component';

describe('LeadingMultinationalClientsComponent', () => {
  let component: LeadingMultinationalClientsComponent;
  let fixture: ComponentFixture<LeadingMultinationalClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadingMultinationalClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadingMultinationalClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
