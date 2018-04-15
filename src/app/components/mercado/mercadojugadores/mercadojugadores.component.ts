import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';
import "rxjs/add/operator/map"; //Libreria para mapear los resultados a JSON

@Component({
  selector: 'app-mercadojugadores',
  templateUrl: './mercadojugadores.component.html',
  styles: []
})
export class MercadojugadoresComponent implements OnInit {

  jugadores: any[] = [];
  proximasTemporadas: any[] = [];

  constructor( private _manager:ManagerService ) {

    this._manager.getListaJugadoresConContrato()
        .map((resp:any)=> resp)
        .subscribe( listaJugadores  => {
          this.jugadores = listaJugadores;
          console.log( this.jugadores );
        });

  }  //Inicializamos una instancia de nuestro Servicio

  ngOnInit() {
    this._manager.getProximasTemporadas()
        .map((resp:any)=>resp)
        .subscribe( temporadas  => {
          this.proximasTemporadas = temporadas;
          console.log( this.proximasTemporadas );
        });
  }

}
