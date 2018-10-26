import {Component, Input, OnInit} from '@angular/core';
import {ICollaboratorObject} from '../model/collaborator';

@Component({
  selector: 'app-list-collaborator',
  templateUrl: './list-collaborator.component.html',
  styleUrls: ['./list-collaborator.component.scss']
})
export class ListCollaboratorComponent implements OnInit {
  @Input() collaborators: ICollaboratorObject;


  constructor() {
  }

  ngOnInit() {
    console.log(this.collaborators);
  }

}
