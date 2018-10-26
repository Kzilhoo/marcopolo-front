import {Component, Input, OnInit, ViewChild, EventEmitter} from '@angular/core';
import {ICollaborator} from '../model/collaborator';
import {TransmissionService} from '../transmission.service';
import {ResumeComponent} from '../resume/resume.component';


@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  @ViewChild(ResumeComponent)child: ResumeComponent;
  @Input() collaborator: ICollaborator;
  constructor(private transmissionService: TransmissionService) {
  }

  ngOnInit() {
    console.log(this.collaborator);
  }
  updateCollaborator(collaborator): void {
    console.log('COLLABORATOR-CLICK');
    this.transmissionService.updateCollaborator(collaborator);
  }
}
