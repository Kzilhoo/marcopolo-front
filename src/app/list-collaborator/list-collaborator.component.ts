import {Component, Input, OnInit} from '@angular/core';
import {ICollaborator, ICollaboratorArray} from '../model/collaborator';

@Component({
  selector: 'app-list-collaborator',
  templateUrl: './list-collaborator.component.html',
  styleUrls: ['./list-collaborator.component.scss']
})
export class ListCollaboratorComponent implements OnInit {
  // cette variable sera instanciée par angular automatiquement
  // avec le contenu de la propriété 'collaborators'
  // dans la balise html du Component :
  // ex: <CollaboratorList [collaborators]="[1,2,3]"></CollaboratorList>
  @Input() collaborators: ICollaboratorArray[];

  constructor() { }

  ngOnInit() {
  }

}
