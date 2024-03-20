import { Component } from '@angular/core';
import { Person } from '../../models/person.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { personService } from '../people.service';
import { inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactMethodComponent } from '../contact-method-tab/contact-method-tab.component';
import { AddressTabComponent } from '../address-tab/address-tab.component';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent {
  private modalService = inject(NgbModal);
  openContactMethodForm(isEdit: boolean) {
    const modalRef = this.modalService.open(ContactMethodComponent);
    modalRef.componentInstance.isEdit = isEdit;
    modalRef.componentInstance.personId = this.person.id;
  }
  openAddressForm(isEdit: boolean) {
    const modalRef = this.modalService.open(AddressTabComponent);
    modalRef.componentInstance.isEdit = isEdit;
    modalRef.componentInstance.personId = this.person.id;
  }
  person!: Person;
  active = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private personService: personService
  ) {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.getPersonDetails(id);
      console.log(id);
    });
  }

  getPersonDetails(id: number): void {
    this.personService.getPerson(id).subscribe(
      (response) => {
        this.person = response;
      },
      (error: HttpErrorResponse) => {
        console.error('Failed to fetch person details:', error);
      }
    );
  }
}
