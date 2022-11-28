import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  query: string = "";

  searchGifs() {
    let clean = this.query.trim().toLocaleLowerCase();
    if(clean!='') {
      this.gifsService.searchGifs(clean);
      this.query="";
    }
  }
}
