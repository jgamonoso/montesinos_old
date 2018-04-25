import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';
import "rxjs/add/operator/map"; // Libreria para mapear los resultados a JSON

@Component({
  selector: "app-aloffseasonjugadores",
  templateUrl: "./aloffseasonjugadores.component.html"
})
export class AloffseasonjugadoresComponent implements OnInit {

  jugadoresALibre: any[] = [];

  constructor(private _manager: ManagerService) {
    this._manager
      .getListaJugadoresAgenciaLibre()
      .map((resp: any) => resp)
      .subscribe(agenciaLibre => {
        this.jugadoresALibre = agenciaLibre;
        console.log(this.jugadoresALibre);
      });
  } // Inicializamos una instancia de nuestro Servicio

  ngOnInit() {}
}
