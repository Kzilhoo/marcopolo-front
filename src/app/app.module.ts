import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatChipsModule, MatDividerModule} from '@angular/material';
import { HomepageComponent } from './homepage/homepage.component';
import { CollaboratorService} from './collaborator.service';
import { HttpClientModule} from '@angular/common/http';
import { ListCollaboratorComponent } from './list-collaborator/list-collaborator.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { ResumeComponent } from './resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationComponent,
    ListCollaboratorComponent,
    CollaboratorComponent,
    ResumeComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [CollaboratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
