import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMethodComponent } from './contact-method-tab.component';

describe('ContactMethodTabComponent', () => {
  let component: ContactMethodComponent;
  let fixture: ComponentFixture<ContactMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactMethodComponent]
    });
    fixture = TestBed.createComponent(ContactMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
