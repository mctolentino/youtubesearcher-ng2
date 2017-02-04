import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {SearchBox} from "./youtube-search/search-box";
import {SearchResultComponent} from "./youtube-search/search-result-component";
import {youtubeServiceInjectables} from "./youtube-search/youtube-service-injectables";
import {YouTubeSearchComponent} from "./youtube-search/youtube-search-component";

@NgModule({
  declarations: [
    AppComponent,
    YouTubeSearchComponent,
    SearchBox,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    youtubeServiceInjectables
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
