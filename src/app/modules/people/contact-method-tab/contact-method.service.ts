import { contactMethods } from './../../models/contact.metod.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ContactMethodService {

  private baseUrl = 'http://localhost:8080/person';

  constructor(private http: HttpClient) { }

  addContactMethod(id: number, contactMethod: contactMethods): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });

    return this.http.post<any>(`${this.baseUrl}/addContactMethod/${id}`, contactMethod, { headers });
  }
}
