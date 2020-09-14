import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';

@Component({
  selector: 'app-ofertasenviadas',
  templateUrl: './ofertasenviadas.component.html'
})
export class OfertasenviadasComponent implements OnInit {

  ofertasEnviadas: any[] = [];

  constructor(private _manager: ManagerService) {

    this._manager
      .getOfertasEnviadas()
      .map((resp: any) => resp)
      .subscribe(ofertasE => {
        this.ofertasEnviadas = ofertasE;
        console.log(this.ofertasEnviadas);
      });
  }

  ngOnInit() {}

}
