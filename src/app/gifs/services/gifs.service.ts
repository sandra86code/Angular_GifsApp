import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string[] = [];

  constructor() { }

  get historial(): string[] {
    return [...this._historial];
  }

  buscarGifs (query: string) {
    if(this._historial.indexOf(query)==-1) {
      if(this._historial.length<10){
        this._historial.unshift(query);
      }else {
        this._historial.pop();
        this._historial.unshift(query);
      }
    }
  }
}