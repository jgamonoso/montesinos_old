import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';
import "rxjs/add/operator/map"; //Libreria para mapear los resultados a JSON

@Component({
  selector: 'app-mercadoderechos',
  templateUrl: './mercadoderechos.component.html',
  styles: []
})
export class MercadoderechosComponent implements OnInit {

  derechos: any[] = [];

  constructor( private _manager:ManagerService ) {

    this._manager.getListaJugadoresConDerecho()
        .map((resp:any)=> resp)
        .subscribe( listaDerechos  => {
          this.derechos = listaDerechos;
          console.log( this.derechos );
        });
  }

  ngOnInit() {
  }

}
