import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ICollaborator, ICollaboratorArray } from './model/collaborator';
import { Observable } from 'rxjs/internal/Observable';
@Injectable()
export class CollaboratorService {
  getHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-AUTH-TOKEN': 'iaculis.enim@massalobortis.net'
  });
  constructor(private http: HttpClient) {}
  search(terms: string): Observable<ICollaboratorArray> {
    const options = { params: new HttpParams().set('name', terms), headers: this.getHeaders };
    return this.http.get<ICollaboratorArray>('//10.0.75.1/app_dev.php/search', options);
  }
  // get one collaborator,
  getOneCollaborator(name: string): Observable<ICollaborator> {
    return this.http.get<ICollaborator>('//10.0.75.1/app_dev.php/collaborators/?name=' + name);
  }
  // get many collaborator,
  getCollaborators(): Observable<ICollaborator[]> {
    return this.http.get<ICollaborator[]>('//10.0.75.1/app_dev.php/collaborators', {
      headers: this.getHeaders
    });
  }
}
