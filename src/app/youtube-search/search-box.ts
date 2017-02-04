import {Component, OnInit, EventEmitter, ElementRef} from "@angular/core";
import {YouTubeService} from "./youtube-service";
import {Observable} from "rxjs";
import {SearchResult} from "./search-results";


@Component({
  outputs: ['loading', 'results'],
  selector: 'search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>`
})
export class SearchBox implements OnInit {
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    // converts the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 2)
      .debounceTime(250)
      .do(() => this.loading.next(true))
      .map((query: string) => this.youtube.search(query))
      .switch()
      .subscribe(
        // on success
        (results: SearchResult[]) => {
          this.loading.next(false);
          this.results.next(results);
        },
        // on error
        (err: any) => {
          console.log(err);
          this.loading.next(false);
        },
        // on completion
        () => {
          this.loading.next(false);
        }
      );
  }
}
