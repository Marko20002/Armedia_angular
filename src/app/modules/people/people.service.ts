import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "../models/person.model";

@Injectable({
    providedIn: 'root'
  })

export class personService{

    private baseUrl = 'http://localhost:8080';
    constructor(private http :HttpClient){}


    getAllNames(): Observable<Person[]>{
        const headers = new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('jwt')
          });

          return this.http.get<Person[]>(`${this.baseUrl}/person/listAll`, { headers });
    }
    getPerson(id: number): Observable<Person> {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      });
    
      return this.http.get<Person>(`${this.baseUrl}/person/getPersonDetails/${id}`, { headers });
    }
    createPerson(personDTO: Person): Observable<Object> {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      });
  
      return this.http.post(`${this.baseUrl}/person/create`, personDTO, { headers });
    }
} 