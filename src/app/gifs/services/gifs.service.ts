import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, GifsSearchResponse } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _history: string[] = [];
  
  private _api_key: string = "pHHyiNrjegk7J8T87rtFmEOVAwbMijxe"; //La api key de la url de giphy
  private _url: string = "https://api.giphy.com/v1/gifs/search"; //La url de giphy

  private _results: Gif[] = []   //Resultado, que es una coleccion de la interfaz, inicializada a vacío

  constructor(private http: HttpClient) { 
    this._history = JSON.parse(localStorage.getItem("history")!) || [];
  }

  get history(): string[] {
    return [...this._history];
  }

  get results(): Gif[] {
    return [...this._results];
  }

  searchGifs (query: string) {
    if(this._history.indexOf(query)==-1) {  // this._history.includes(query)
      this._history.unshift(query);
      this._history = this._history.splice(0,10);  

      localStorage.setItem("history", JSON.stringify(this._history));
    }
    const params = new HttpParams()
    .set('api_key', this._api_key) //la api_key en la url
    .set('q', query)               //la q en la url
    .set('limit', 10)             //lo puedo hacer porque en giphy este es un parámetro
    
    this.http.get<GifsSearchResponse>(this._url, {params}) //a la url le añadimos los params
    .subscribe ((resp) => this._results = resp.data
    )
  }
}
