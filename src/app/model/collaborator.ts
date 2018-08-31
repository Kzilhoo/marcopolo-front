

export interface ICollaboratorArray {
  byOffice: ICollaborator[];
  byProject: ICollaborator[];
  byCollaborator: ICollaborator[];
}

export interface ICollaboratorDetail {
  id: number;
  name: string;
}

export interface ICollaborator {
  id: number;
  name: string;
  firstName: string;
  fixNumber: string;
  email: string;
  mobileNumber: string;
  workstation: string;
  building: string;
  offices: ICollaboratorDetail;
  projects: ICollaboratorDetail;
  skills: ICollaboratorDetail;
}
