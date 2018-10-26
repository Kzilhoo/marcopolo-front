import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';
import { ICollaborator } from './model/collaborator';

@Injectable({ providedIn: 'root' })
export class TransmissionService {
  private subject = new Subject<ICollaborator>();
  subject$ = this.subject.asObservable();
  updateCollaborator(collaborator: ICollaborator) {
    this.subject.next(collaborator);
  }

}
