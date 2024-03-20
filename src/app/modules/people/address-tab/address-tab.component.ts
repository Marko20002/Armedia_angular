import { Component, Input } from '@angular/core';
import { PostalAddress } from '../../models/postal.address.model';
import { PostalAddressService } from './address.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-address-tab',
  templateUrl: './address-tab.component.html',
  styleUrls: ['./address-tab.component.css']
})
export class AddressTabComponent {
  @Input()
  personId!: number;
  postalAddress : PostalAddress = {};

  constructor(
    private addressService : PostalAddressService,
    private router: Router
  ){}

  submitForm(){
    this.addressService.addPostalAddress(
      this.personId,
      this.postalAddress
    ).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error adding contact method:', error);
      }
    )
  }

}
