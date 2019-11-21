import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina ={};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    // leer archivo json
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private cargarEquipo(){
    // leer archivo json
    this.http.get('https://angular-html-a46a3.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {
      this.equipo = resp;
      // console.log(resp);
    });
  }

}
