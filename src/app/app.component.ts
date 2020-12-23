import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { MovieService } from '../shared/services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  friendsForm: FormGroup;
  options = [
    'all',
    'developer',
    'top-manager',
    'writer',
    'businessman',
    'engineer',
    'preacher',
    'action',
    'Drama',
  ];

  filteredItems: any = [];

  movies: any = [];

  constructor(private fb: FormBuilder, private movieService: MovieService) {}

  filterByName() {
    const currentName = this.friendsForm.value.friendControl;
    const filteredNames = this.movies.filter((movie) => {
      return movie.genres.indexOf(currentName) != -1;
    });
    this.filteredItems = filteredNames;
    if (currentName === 'all') {
      return this.filteredItems;
    }
    console.log(this.filteredItems);
  }

  ngOnInit() {
    this.friendsForm = this.fb.group({
      friendControl: ['all'],
    });
    this.movieService.getMovieList().subscribe((res) => {
      this.movies = res;
      this.filteredItems = [...this.movies];
      console.log(res)
    });
  }
}
