import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../../shared/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('movieId');
    this.movieService.getMovieList().subscribe((res) => {
      this.movie = this.movieService.getMovie(id, res);
      console.log(this.movie);
    });
  }
}
