import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private getActive: DataService) {}
  activeData: String = "";
  isMobile: boolean = true;
  displayMenu: boolean = false;
  ngOnInit(): void {
    this.activeData = this.getActive.getActive();
    this.isMobile = this.getActive.isMobile;
  }
  home() {
    this.getActive.setActive("home");
    this.isMobile = this.getActive.isMobile;
  }
  dest() {
    this.getActive.setActive("dest");
    this.isMobile = this.getActive.isMobile;
  }
  crew() {
    this.getActive.setActive("crew");
    this.isMobile = this.getActive.isMobile;
  }
  tech() {
    this.getActive.setActive("tech");
    this.isMobile = this.getActive.isMobile;
  }
  dispMenu() {
    this.displayMenu = !this.displayMenu;
  }
}
