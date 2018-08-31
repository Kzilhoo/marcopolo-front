import {Component, AfterViewInit, Input} from '@angular/core';
import { CollaboratorService } from '../collaborator.service';
import { ICollaborator, ICollaboratorArray } from '../model/collaborator';
import * as rxjs from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { flatMap} from 'rxjs/internal/operators';
import { map} from 'rxjs/operators';
import{ filter} from 'rxjs/operators';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {
  constructor(private collaboratorService: CollaboratorService) {}
  // tu as besoin d'un propriété pour stocker tes collaborators :
  collaborators: ICollaborator[] = [];
  collaboratorsArray: ICollaboratorArray;
  ngAfterViewInit() {
    this.getCollaborators();
    this.getAll();
  }

  getAll() {
    this.collaboratorService.getCollaborators().subscribe((collaborators: ICollaborator[]) => { this.collaborators = collaborators});
  }
  getCollaborators() {
    const input = document.getElementById('keypressed') as HTMLInputElement;
    const type = rxjs.fromEvent<string>(input, 'keyup');
    type
      .pipe(
        debounceTime(50),
        map(() => input.value),
        filter(inputValue => inputValue.length > 0),
        distinctUntilChanged(),
        tap(text => console.log('globgobgabgalab : ', text.valueOf())),
        flatMap(text => this.collaboratorService.search(text)),
        tap((collaborators: ICollaboratorArray) => (this.collaboratorsArray = collaborators)),
      )
      .subscribe();
  }
}
