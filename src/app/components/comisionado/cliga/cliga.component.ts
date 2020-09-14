import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../../services/manager.service';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-cliga",
  templateUrl: "./cliga.component.html"
})
export class CligaComponent implements OnInit {
  forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      liga: new FormControl("SEASON", Validators.required)
    });
  }

  ligas = [
    {
      pkliga: "SEASON",
      nombre: "Season"
    },
    {
      pkliga: "TEAM_OPTION",
      nombre: "Team Option / LLD"
    },
    {
      pkliga: "CORTE_GRATIS",
      nombre: "Corte Gratis"
    },
    {
      pkliga: "RENOVACIONES",
      nombre: "Renovaciones"
    },
    {
      pkliga: "AL_OFFSEASON",
      nombre: "AL Offseason"
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
