import { Component, OnInit } from '@angular/core';
//import { Services } from '@angular/core/src/view';
import { ManagerService } from "../../services/manager.service";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  forma: FormGroup;

  constructor(public _manager: ManagerService) {
    this.forma = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.maxLength(50)
      ]),
      password: new FormControl("", Validators.required),
      liga: new FormControl("", Validators.required)
    });
  }

  ligas = [
    {
      pkliga: "1",
      nombre: "MNBA"
    },
    {
      pkliga: "2",
      nombre: "DLEAGUE"
    }
  ];

  ngOnInit() {}

  validarLogin() {
    console.log(this.forma.value);
    console.log(this.forma.value.username);
    console.log(this.forma);
    //this.forma.reset(this.usuario);

    //this._manager
    //  .getValidacion(this.forma.value)
    //  .map((resp: any) => resp)
    //  .subscribe(managers => {
    //    this.managers = managers;
    //    console.log(this.managers);
    //  });

    this.forma.reset();
  }
}
