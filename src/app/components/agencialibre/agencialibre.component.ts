import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
import "rxjs/add/operator/map"; //Libreria para mapear los resultados a JSON

@Component({
  selector: 'app-agencialibre',
  templateUrl: './agencialibre.component.html',
  styles: []
})
export class AgencialibreComponent implements OnInit {

  jugadoresALibre: any[] = [];

  constructor( private _manager:ManagerService ) {

    this._manager.getListaJugadoresAgenciaLibre()
        .map((resp:any)=> resp)
        .subscribe( agenciaLibre  => {
          this.jugadoresALibre = agenciaLibre;
          console.log( this.jugadoresALibre );
        });

  }  //Inicializamos una instancia de nuestro Servicio


  ngOnInit() {
  }

  // ngOnInit() {
  //   this._crudProducto.listargrupos()            //Llamamos a la funcion listar de nuestro servicio
  //   .map((response) => response.json())   //Mapeamos los datos devueltos por nuestro archivo php
  //   .subscribe((data) => {
  //     this.listado = data;                //Asignamos nuestros datos mapeados a una variable
  //   });
  //}

}
