import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { MovieService } from '../../../shared/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movieForm: FormGroup;
  options = [
    'all',
    'action',
    'drama',
    'sci-fi',
    'comedy',
    'biography',
    'thriller',
    'sport',
  ];

  filteredMovies: any = [];

  movies: any = [];

  constructor(private fb: FormBuilder, private movieService: MovieService) {}

  filterByName() {
    const currentName = this.movieForm.value.friendControl.toLowerCase();
    const filteredNames = this.movies.filter((movie) => {
      const genre = movie.genres.map((val) => val.toLowerCase());
      return genre.indexOf(currentName) != -1;
    });
    this.filteredMovies = filteredNames;
    if (currentName === 'all') {
      return (this.filteredMovies = [...this.movies]);
    }
    console.log(this.filteredMovies);
  }

  ngOnInit() {
    this.movieForm = this.fb.group({
      friendControl: ['all'],
    });
    this.movieService.getMovieList().subscribe((res) => {
      this.filteredMovies = res;
      this.movies = res;
      console.log(res);
    });
  }
}
