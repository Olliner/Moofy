import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  movies: any[] = [];
  baseUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private movieService: MovieService, private navCtrl: NavController) {}

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(response => {
      this.movies = response.results;
    });
  }

  goToCartaz() {
    this.navCtrl.navigateForward('/cartaz'); 
  }
  goToFavoritos() {
    this.navCtrl.navigateForward('/favoritos');
  }
}
