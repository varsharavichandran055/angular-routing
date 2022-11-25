import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAComponent } from './contact-a.component';

describe('ContactAComponent', () => {
  let component: ContactAComponent;
  let fixture: ComponentFixture<ContactAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
