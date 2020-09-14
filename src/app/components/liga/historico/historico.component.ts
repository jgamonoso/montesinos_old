import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html'
})
export class HistoricoComponent implements OnInit {

  historicoPalmares: any[] = [];
  temporadasPalmares: any[] = [];

  historicoRecords: any[] = [];

  constructor( private _manager: ManagerService ) {

    this._manager.getObtenerPalmaresLiga()
        .map((resp: any) => resp)
        .subscribe( palmares  => {
          this.historicoPalmares = palmares;
          console.log( this.historicoPalmares );

          for (let i = 0; i < this.historicoPalmares.length; i++) {
              if ( (this.temporadasPalmares.indexOf(this.historicoPalmares[i].temporada.nombre) > -1) ){
                // console.log( "ESTÁ: " + this.historicoPalmares[i].temporada.nombre );
              } else {
                // console.log( "NO ESTÁ: " + this.historicoPalmares[i].temporada.nombre + ". LO AÑADIMOS");
                this.temporadasPalmares.push(this.historicoPalmares[i].temporada.nombre);
              }
          }
          // console.log( this.temporadasPalmares );

        });

    this._manager.getObtenerRecordsLiga()
        .map((resp: any) => resp)
        .subscribe( records  => {
          this.historicoRecords = records;
          console.log( this.historicoRecords );
        });
  }

  ngOnInit() {

    // this.getTemporadas();
  }

  // getTemporadas(){
  //   let x=0;
  //   console.log( "ghjhgjhgjhgj" );
  //   for (let i = 0; i < this.historicoPalmares.length; i++) {
  //       console.log( "bbbbbbbbb" );
  //       if ( this.temporadasPalmares.indexOf(this.historicoPalmares[i].temporada.nombre > -1) ){
  //         this.temporadasPalmares.push(this.historicoPalmares[i].temporada);
  //         console.log( "aaaaaa" );
  //       } else {
  //         console.log( "vvvvvvvs" );
  //       }
  //   }
  //   console.log( this.temporadasPalmares );
  // }

}
