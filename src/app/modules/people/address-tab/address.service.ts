import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostalAddress } from "../../models/postal.address.model";


@Injectable({
  providedIn: 'root'
})
export class PostalAddressService {

  private baseUrl = 'http://localhost:8080/person';

  constructor(private http: HttpClient) { }

  addPostalAddress(id: number, postalAddress: PostalAddress): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });

    return this.http.post<any>(`${this.baseUrl}/addAddress/${id}`, postalAddress, { headers });
  }
}
