import {Component, OnInit, ViewChild} from '@angular/core';
import { TransmissionService} from '../transmission.service';
import {ICollaborator} from '../model/collaborator';
import { Subscription } from 'rxjs';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})


export class ResumeComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  subscription: Subscription;
  collaborator: ICollaborator;
  constructor(private transmissionsService: TransmissionService) {
  }
  ngOnInit() {
    this.subscription = this.transmissionsService.subject$
      .subscribe((collaborator) => {
      this.collaborator = collaborator;
      console.log('RESUME-COMPONENT', this.collaborator);
      });
  }
}
