import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-techsubnav",
  templateUrl: "./techsubnav.component.html",
  styleUrls: ["./techsubnav.component.css"],
})
export class TechsubnavComponent implements OnInit {
  activeTechSub: number = 1;
  constructor(private getTech: DataService, private router: Router) {}
  ngOnInit(): void {
    this.activeTechSub = this.getTech.activeTechSub;
  }
  activeTech(num: number, str: string) {
    this.activeTechSub = num;
    this.getTech.activeTechSub = num;
    this.router.navigate(["tech/" + str]);
  }
}
