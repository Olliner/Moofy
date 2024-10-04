import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '8449a449381677d068479b7b69f086d6';
  private apiUrl = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) { }

  // Função para buscar filmes populares
  getPopularMovies() {
    return this.http.get<any>(`${this.apiUrl}/popular?api_key=${this.apiKey}&language=pt-BR`);
  }

  // Função para buscar filmes em cartaz
  getNowPlayingMovies() {
    return this.http.get<any>(`${this.apiUrl}/now_playing?api_key=${this.apiKey}&language=pt-BR`);
  }

  // Função para buscar filmes mais bem avaliados
  getTopRatedMovies() {
    return this.http.get<any>(`${this.apiUrl}/top_rated?api_key=${this.apiKey}&language=pt-BR`);
  }
}
