import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';

@Component({
  selector: 'app-apuestaslista',
  templateUrl: './apuestaslista.component.html',
  styles: []
})
export class ApuestaslistaComponent implements OnInit {

  equiposLiga: any[] = [];

  constructor( private _manager:ManagerService ) {

    this._manager.getObtenerListaEquiposLiga()
        .map((resp:any)=> resp)
        .subscribe( equipos  => {
          this.equiposLiga = equipos;
          console.log( this.equiposLiga );
        });

  }  //Inicializamos una instancia de nuestro Servicio

  ngOnInit() {
  }

}
