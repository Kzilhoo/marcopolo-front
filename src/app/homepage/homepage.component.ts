import { Component, AfterViewInit, Output } from '@angular/core';
import { CollaboratorService } from '../collaborator.service';
import { ICollaboratorObject} from '../model/collaborator';
import * as rxjs from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { flatMap } from 'rxjs/internal/operators';
import { map } from 'rxjs/operators';
import { filter} from 'rxjs/operators';
import { TransmissionService } from '../transmission.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {
  // tu as besoin d'un propriété pour stocker tes collaborators :
  constructor(
    private collaboratorService: CollaboratorService,
    private transmissionService: TransmissionService) {}
  collaboratorsArray: ICollaboratorObject = {
    byOffice: [],
    byProject: [],
    byCollaborator: [],
  };
  chipsState = [
      {name: 'Collaborateurs', checked: true},
      {name: 'Projets', checked: true},
      {name: 'Competences', checked: true}
    ];
  filters = ['Collaborateurs', 'Projets', 'Competences'];
  ngAfterViewInit() {
    this.getCollaborators();
  }

  chipCheck(chip) {
    return chip.checked = !chip.checked;
  }

  setFilters(chip) {
    if (!this.chipCheck(chip)) {
      this.filters.splice(this.filters.indexOf(chip.name), 1);
    } else {
      this.filters.push(chip.name);
    }
    console.log(this.filters);
  }

  getCollaborators() {
    const input = document.getElementById('keypressed') as HTMLInputElement;
    const type = rxjs.fromEvent<string>(input, 'keyup');
    type
      .pipe(
        debounceTime(150),
        map(() => input.value),
        filter(inputValue => inputValue.length > 0),
        distinctUntilChanged(),
        tap(text => console.log('globgobgabgalab : ', text.valueOf())),
        flatMap(text => this.collaboratorService.search(text.split(' '), this.filters)),
        tap((collaborators: ICollaboratorObject) => (this.collaboratorsArray = collaborators))
      )
      .subscribe();
  }
}
