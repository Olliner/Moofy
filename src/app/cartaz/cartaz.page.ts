import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cartaz',
  templateUrl: './cartaz.page.html',
  styleUrls: ['./cartaz.page.scss'],
})
export class CartazPage implements OnInit {
  nowPlayingMovies: any[] = [];
  baseUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private movieService: MovieService, private navCtrl: NavController) { }

  ngOnInit() {
    // Busca os filmes em cartaz
    this.movieService.getNowPlayingMovies().subscribe(response => {
      this.nowPlayingMovies = response.results;
    });

  }

  goToPrincipal() {
    this.navCtrl.navigateForward('/home'); 
  }

  goToFavoritos() {
    this.navCtrl.navigateForward('/favoritos');
  }
}
