import {YouTubeService} from "./youtube-service";

export let youtubeServiceInjectables: Array<any> = [
  {provide: YouTubeService, useClass: YouTubeService},
  {provide: 'YOUTUBE_API_KEY', useValue: 'AIzaSyAuGFxAZHq0gltWjTqNP1AtdIjFytwKwG0'},
  {provide: 'YOUTUBE_API_URL', useValue: 'https://www.googleapis.com/youtube/v3/search'}
];
