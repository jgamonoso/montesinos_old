import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';

@Component({
  selector: 'app-ofertasrecibidas',
  templateUrl: './ofertasrecibidas.component.html'
})
export class OfertasrecibidasComponent implements OnInit {

  ofertasRecibidas: any[] = [];

  constructor(private _manager: ManagerService) {

    this._manager
      .getOfertasRecibidas()
      .map((resp: any) => resp)
      .subscribe(ofertasR => {
        this.ofertasRecibidas = ofertasR;
        console.log(this.ofertasRecibidas);
      });
  }

  ngOnInit() {}

}
