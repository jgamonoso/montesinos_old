import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/manager.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-managerlista',
  templateUrl: './managerlista.component.html',
  styles: []
})
//export class ListaequiposComponent implements OnInit {
export class ManagerlistaComponent {

  managers: any[] = [];

  //private listaEquipos:ListaEquipos[] = [];

  constructor( public _manager:ManagerService/*, private _router:Router*/ ) {
    this._manager.getListaManagers()
          .map( (resp:any) => resp)
          .subscribe( managers  => {
            this.managers = managers;
            console.log( this.managers );
          });
  }

  // verEquipo( idx:number ){
  //   //console.log( idx );
  //   this._router.navigate( ['/managerdetalle',idx] );
  // }

}
