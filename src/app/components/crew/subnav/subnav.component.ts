import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-subnav",
  templateUrl: "./subnav.component.html",
  styleUrls: ["./subnav.component.css"],
})
export class SubnavComponent implements OnInit {
  constructor(private router: Router, private getCrew: DataService) {}
  active: number = 0;
  ngOnInit(): void {
    this.active = this.getCrew.activeSubCrewNavBar;
  }
  nav(str: String, num: number) {
    this.router.navigate(["crew/" + str]);
    this.active = num;
    this.getCrew.activeSubCrewNavBar = this.active;
  }
}
