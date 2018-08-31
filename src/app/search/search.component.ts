import { Component, OnInit } from '@angular/core';
import { CollaboratorService} from '../collaborator.service';
import { Subject} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [CollaboratorService]
})
export class SearchComponent implements OnInit{
  results: Object;
  searchTerm$ = '';
  ngOnInit() {
    this.collaboratorService.search(this.searchTerm$);
  }
  constructor(private collaboratorService: CollaboratorService) {
    this.collaboratorService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results;
      });
  }
}
