import { Component, ViewChild } from '@angular/core';
import {HomepageComponent} from '../homepage/homepage.component';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @ViewChild(HomepageComponent) child: HomepageComponent;
  constructor() {}
  }
