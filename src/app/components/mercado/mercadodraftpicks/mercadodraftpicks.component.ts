import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';
import "rxjs/add/operator/map"; //Libreria para mapear los resultados a JSON

@Component({
  selector: 'app-mercadodraftpicks',
  templateUrl: './mercadodraftpicks.component.html',
  styles: []
})
export class MercadodraftpicksComponent implements OnInit {

  drafPicks: any[] = [];

  constructor( private _manager:ManagerService ) {

    this._manager.getListaDraftPicks()
        .map((resp:any)=> resp)
        .subscribe( listaDraftPicks  => {
          this.drafPicks = listaDraftPicks;
          console.log( this.drafPicks );
        });

  }  //Inicializamos una instancia de nuestro Servicio

  ngOnInit() {
  }

}
