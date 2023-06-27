import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-destnavbar",
  templateUrl: "./destnavbar.component.html",
  styleUrls: ["./destnavbar.component.css"],
})
export class DestnavbarComponent implements OnInit {
  destActive: number = 0;
  constructor(private getDest: DataService, private router: Router) {}

  ngOnInit(): void {
    this.destActive = this.getDest.activeDestbar;
  }
  active(str: String, num: number) {
    this.getDest.activeDestbar = num;
    this.router.navigate(["dest/" + str]);
  }
}
