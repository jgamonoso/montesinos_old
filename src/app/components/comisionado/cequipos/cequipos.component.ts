import { Component, OnInit } from '@angular/core';
import { ManagerService } from "../../../services/manager.service";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-cequipos",
  templateUrl: "./cequipos.component.html"
})
export class CequiposComponent implements OnInit {
  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      equipo: new FormControl("jugadores", Validators.required),
      opcion: new FormControl("jugadores", Validators.required)
    });
  }

  opciones = [
    {
      opt: "jugadores",
      nombre: "Jugadores"
    },
    {
      opt: "derechos",
      nombre: "Derechos"
    },
    {
      opt: "draftpicks",
      nombre: "Draft Picks"
    },
    {
      opt: "corte_gratis",
      nombre: "Activar Corte Gratis"
    },
    {
      opt: "bloq_desbloq",
      nombre: "Bloquear/desbloquear"
    }
  ];

  ngOnInit() {}

  guardarCambios() {
    console.log(this.forma.value);
    console.log(this.forma);
    //this.forma.reset(this.usuario);
    //this.forma.reset();
  }
}
