import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import "rxjs/add/operator/map";

@Injectable()
export class ManagerService {

  // managers: Manager[] = [];
  // managers: any[] = [];
  // proximasTemporadas: any[] = [];
  // listaAL: any[] = [];
  // private manager: Manager = {};
  // private equipo:any = {};


  constructor(public _http: HttpClient) {
    console.log('Constructor de Servicio listo.');
  }

  getListaManagers() {

    let pkLiga = 1;

    let url = `http://localhost/api/gestores/gestormanager.php?allManagers=yes&pkLiga=${ pkLiga }`;
    // console.log("Entramos en getListaManagers");
    return this._http.get( url );
    // return this._http.get( url )
    //       .map( ( resp: any ) => {
    //         this.managers = resp;
    //         return this.managers;
    //       });

              // .map( ( resp: Manager[] ) => {
              //   this.managers = resp;
              //   //console.log("getListaManagers this.managers: " + this.managers);
              //   return this.managers;
              // });
  }

  getManager( idx: number ) {

    // let url = 'http://localhost/api/gestores/gestormanagerb.php';
    let url = `http://localhost/api/gestores/gestormanager.php?allManagers=no&pkManager=${ idx }`;
    return this._http.get( url );

  }

  getProximasTemporadas() {
    let url = `http://localhost/api/gestores/gestortemporadaB.php`;
    // console.log("Entramos en getListaManagers");
    return this._http.get( url );
          // .map( ( resp: any ) => {
          //   this.proximasTemporadas = resp;
          //   return this.proximasTemporadas;
          // });
  }

  getListaJugadoresAgenciaLibre() {

    let pkLiga = 1;

    let url = `http://localhost/api/gestores/gestorjugadorligaB.php?mercado=AL&pkLiga=${ pkLiga }`;
    // console.log("Entramos en getListaManagers");
    return this._http.get( url );
          // .map( ( resp: any ) => {
          //   this.listaAL = resp;
          //   return this.listaAL;
          // });
  }


  getListaJugadoresConContrato() {
    let pkLiga = 1;
    let url = `http://localhost/api/gestores/gestorjugadorligaB.php?mercado=CC&pkLiga=${ pkLiga }`;
    return this._http.get( url );
  }

  getListaJugadoresConDerecho() {
    let pkLiga = 1;
    let url = `http://localhost/api/gestores/gestorjugadorligaB.php?mercado=DE&pkLiga=${ pkLiga }`;
    return this._http.get( url );
  }

  getListaDraftPicks() {
    let pkLiga = 1;
    let url = `http://localhost/api/gestores/gestorjugadorligaB.php?mercado=DP&pkLiga=${ pkLiga }`;
    return this._http.get( url );
  }

//////////////////////////////
  getListaJugadoresConContratoTradingBlock() {
    let pkLiga = 1;
    let url = `http://localhost/api/gestores/gestorjugadorligaB.php?mercado=no&trading=CC&pkLiga=${ pkLiga }`;
    return this._http.get( url );
  }

  getListaJugadoresConDerechoTradingBlock() {
    let pkLiga = 1;
    let url = `http://localhost/api/gestores/gestorjugadorligaB.php?mercado=no&trading=DE&pkLiga=${ pkLiga }`;
    return this._http.get( url );
  }

  getListaDraftPicksTradingBlock() {
    let pkLiga = 1;
    let url = `http://localhost/api/gestores/gestordraftpickB.php?mercado=no&trading=DP&pkLiga=${ pkLiga }`;
    return this._http.get( url );
  }

  // getEquipoNba( idx: number ) {
  //
  //   //let url = 'http://localhost/api/gestores/gestormanagerb.php';
  //   let url = `http://localhost/api/gestores/gestorequiponba.php?fkEquipoNba=${ idx }`;
  //   //console.log("SASDASD");
  //   return this._http.get( url );
  //
  // }

  getNoticias( idx: number ) {

    //TODO: cambiar el valor de semana a 1;
    let semana = 14;
    let pkLiga = 1;

    let url = `http://localhost/api/gestores/gestornoticia.php?noticias=yes&pagina=${ idx }&pkLiga=${ pkLiga }`;
    return this._http.get( url );

  }

  getObtenerListaEquiposLiga() {
    let pkLiga = 1;

    let url = `http://localhost/api/gestores/gestorequipoB.php?pkLiga=${ pkLiga }`;
    return this._http.get( url );

  }

  getObtenerPalmaresLiga() {
    let pkLiga = 1;

    let url = `http://localhost/api/gestores/gestorpalmaresB.php?pkLiga=${ pkLiga }`;
    return this._http.get( url );

  }

  getObtenerRecordsLiga() {
    let pkLiga = 1;

    let url = `http://localhost/api/gestores/gestorrecordB.php?pkLiga=${ pkLiga }`;
    return this._http.get( url );

  }



}

// export interface Manager{
//   pkManager:number;
//   nombre:String;
//   login:String;
//   password:String;
//   email:String;
//   grupo:any;
//   equipo:any;
// }
