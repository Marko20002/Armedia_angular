import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CaseFile } from '../models/casefile.model';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createCaseFile(caseFile: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/caseFiles/create`, caseFile);
  }

  getAllCaseFiles(): Observable<CaseFile[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });

    return this.http.get<CaseFile[]>(`${this.baseUrl}/caseFiles/listAll`, { headers });
  }
  

  getCaseFileById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateCaseFile(id: number, caseFile: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/caseFiles/update`, caseFile);
  }

  handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    throw error;
  }
}
