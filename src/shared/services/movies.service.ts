import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovieList(): any {
    return this.http
      .get<any>('http://my-json-server.typicode.com/moviedb-tech/movies/list');
  }
}
