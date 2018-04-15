import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';
import "rxjs/add/operator/map"; //Libreria para mapear los resultados a JSON

@Component({
  selector: 'app-mercadotradingblock',
  templateUrl: './mercadotradingblock.component.html',
  styles: []
})
export class MercadotradingblockComponent implements OnInit {

  jugadoresTB: any[] = [];
  derechosTB: any[] = [];
  drafPicksTB: any[] = [];

  proximasTemporadas: any[] = [];

  constructor( private _manager:ManagerService ) {

    this._manager.getListaJugadoresConContratoTradingBlock()
        .map((resp:any)=> resp)
        .subscribe( listaJugadoresTB  => {
          this.jugadoresTB = listaJugadoresTB;
          console.log( this.jugadoresTB );
        });

    this._manager.getListaJugadoresConDerechoTradingBlock()
        .map((resp:any)=> resp)
        .subscribe( listaDerechosTB  => {
          this.derechosTB = listaDerechosTB;
          console.log( this.derechosTB );
        });

    this._manager.getListaDraftPicksTradingBlock()
        .map((resp:any)=> resp)
        .subscribe( listaDraftPicksTB  => {
          this.drafPicksTB = listaDraftPicksTB;
          console.log( this.drafPicksTB );
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
