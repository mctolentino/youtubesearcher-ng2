import {Component} from "@angular/core";
import {SearchResult} from "./search-results";
let loadingGif: string = ((<any>window).__karma__) ? '' : require('../images/loading.gif');

@Component({
  selector: 'youtube-search',
  template: `
    <div class="container">
      <div class="page-header">
        <h1>Youtube Search
          <img style="float: right;"
               *ngIf="loading"
               src="${loadingGif}">
        </h1>
      </div>
      <div class="row">
        <div class="input-group input-group-lg col-md-12">
          <search-box
            (loading)="loading = $event"
            (results)="updateResults($event)"></search-box>
        </div>
      </div>
      <div class="panel-body">
        <div class="row">
          <search-result
            *ngFor="let result of results"
            [result]="result"></search-result>
        </div>
      </div>
    </div>
  `
})
export class YouTubeSearchComponent {
  results: SearchResult[];

  updateResults(results: SearchResult[]): void {
    this.results = results;
  }
}
