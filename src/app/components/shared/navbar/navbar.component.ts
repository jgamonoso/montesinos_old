import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  login() {
    console.log("Entramos en el login");
  }

  logout() {
    console.log("Entramos en el logout");
  }
}
