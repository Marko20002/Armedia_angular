import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactMethodService } from './contact-method.service';
import { Person } from '../../models/person.model';
import { Router } from '@angular/router';
import { contactMethods } from '../../models/contact.metod.model';

@Component({
  selector: 'app-contact-method',
  templateUrl: './contact-method-tab.component.html',
  styleUrls: ['./contact-method-tab.component.css'],
})
export class ContactMethodComponent {
  @Input()
  personId!: number;
  contactMethods: contactMethods = {};
  constructor(
    private fb: FormBuilder,
    private ContactMethodService: ContactMethodService,
    private router: Router
  ) {}

  submitForm() {
    this.ContactMethodService.addContactMethod(
      this.personId,
      this.contactMethods
    ).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error adding contact method:', error);
      }
    );
  }
}
