import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'simple-http',
  template: `
  <h2>Basic Request</h2>
  <button type="button" (click)="makeRequest()">Make Request</button>
  <div *ngIf="loading">Loading...</div>
  <pre>{{data | json}}</pre>
`
})
export class SimpleHttpComponent {
  data: Object;
  loading: boolean;

  constructor(private http: Http) {
  }

  makeRequest(): void {
    this.loading = true;

    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe(success, failure);

    function success(res: Response) {
      this.data = res.json();
      this.loading = false;
    }

    function failure() {
      this.loading = false
    }
  }
}
