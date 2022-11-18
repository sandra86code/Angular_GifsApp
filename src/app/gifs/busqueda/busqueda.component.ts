import { Component, OnInit, Input } from '@angular/core';
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

  buscarGifs() {
    console.log(this.query);
    this.gifsService.buscarGifs(this.query);
    this.query="";
  }
}
