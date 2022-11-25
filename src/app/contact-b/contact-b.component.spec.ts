import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBComponent } from './contact-b.component';

describe('ContactBComponent', () => {
  let component: ContactBComponent;
  let fixture: ComponentFixture<ContactBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
