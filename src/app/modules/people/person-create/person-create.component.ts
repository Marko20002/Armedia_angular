import { Component, Input } from '@angular/core';
import { Person } from '../../models/person.model';
import { personService } from '../people.service';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent {
addAddress() {
throw new Error('Method not implemented.');
}
addContactMethod() {
throw new Error('Method not implemented.');
}

  person: Person = {
    name: '',
    familyName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    contactMethods: [],
    addresses: [],
    id: 0
  };

  constructor(private personService: personService) {}

  submitForm() {
    this.personService.createPerson(this.person).subscribe(
      () => {
        console.log('Person created successfully');
        this.person = {
          name: '',
          familyName: '',
          dateOfBirth: '',
          placeOfBirth: '',
          contactMethods: [],
          addresses: [],
          id :0
        };
      },
      (error) => {
        console.error('Error creating person:', error);
      }
    );
  }
}
