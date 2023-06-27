import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-victor",
  templateUrl: "./victor.component.html",
  styleUrls: ["./victor.component.css"],
})
export class VictorComponent implements OnInit {
  constructor(public getCrew: DataService) {}

  ngOnInit(): void {}
}
