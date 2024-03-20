import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { personService } from '../people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];
  active = 1;
  selectedPersonId!: number ;
  person: any;

  constructor(
    private personService: personService,
    protected route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.fetchPerson();
  }

  selectPerson(person: Person): void {
    if (person.id) {
      this.selectedPersonId = person.id;
    }
  }

  fetchPerson(): void {
    this.personService.getAllNames().subscribe(
      (person) => {
        this.persons = person;
      },
      (error) => {
        if (error.status === 404) {
          console.error('Person not found');
        } else {
          console.error('Failed to fetch person ', error);
        }
      }
    );
  }
}
