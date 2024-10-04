import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  topRatedMovies: any[] = [];
  baseUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private movieService: MovieService, private navCtrl: NavController) { }

  ngOnInit() {
    this.movieService.getTopRatedMovies().subscribe(response => {
      this.topRatedMovies = response.results;
    });
  }

  goToPrincipal() {
    this.navCtrl.navigateForward('/home'); 
  }
  goToCartaz() {
    this.navCtrl.navigateForward('/cartaz');
  }
}
