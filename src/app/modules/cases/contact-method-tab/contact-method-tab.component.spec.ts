import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMethodTabComponent } from './contact-method-tab.component';

describe('ContactMethodTabComponent', () => {
  let component: ContactMethodTabComponent;
  let fixture: ComponentFixture<ContactMethodTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMethodTabComponent]
    });
    fixture = TestBed.createComponent(ContactMethodTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
