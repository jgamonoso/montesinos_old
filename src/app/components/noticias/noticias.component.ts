import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styles: []
})
export class NoticiasComponent implements OnInit {

  diasNoticias: any[] = [];
  pagination: number;

  constructor( private activatedRoute: ActivatedRoute, public _manager: ManagerService ) {

  }

  ngOnInit() {
    this.activatedRoute.params
        .map( params => params['id'] ) //estoy asignando el valor del parametro id a params
        .subscribe( id => {

          this.pagination = id;
          console.log( this.pagination );

          this._manager.getNoticias( id ) //devuelve el manager
              .map((resp:any)=>resp)
              .subscribe( noticia => {
                this.diasNoticias = noticia;
                console.log( this.diasNoticias );
              });

        });
  }

}
