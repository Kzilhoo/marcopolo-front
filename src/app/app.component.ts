import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], encapsulation: ViewEncapsulation.None // Use the component style file as main style file
})
export class AppComponent {
  title = 'app';
}
