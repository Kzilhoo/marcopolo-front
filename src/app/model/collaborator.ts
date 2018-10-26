import {Observable} from 'rxjs';

type ICollaboratorArray = ICollaborator[];
export interface ICollaboratorObject {
  byOffice: ICollaboratorArray;
  byProject: ICollaboratorArray;
  byCollaborator: ICollaboratorArray;
}

export interface ICollaboratorDetail {
  id: number;
  name: string;
}

export interface ICollaborator {
  id: number;
  name: string;
  picture: string;
  pictureUrl: string;
  firstName: string;
  fixNumber: string;
  email: string;
  mobileNumber: string;
  workstation: string;
  floor: string;
  building: string;
  offices: ICollaboratorDetail;
  projects: ICollaboratorDetail;
  skills: ICollaboratorDetail;
}
