import {Component, Input, OnInit} from '@angular/core';
import {ICollaborator, ICollaboratorArray} from '../model/collaborator';


@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  // cette variable sera instanciée par angular automatiquement
  // avec le contenu de la propriété 'collaborators'
  // dans la balise html du Component :
  // ex: <CollaboratorList [collaborators]="[1,2,3]"></CollaboratorList>
  @Input() collaborator: ICollaboratorArray;
  constructor() { }

  ngOnInit() {
  }

}
