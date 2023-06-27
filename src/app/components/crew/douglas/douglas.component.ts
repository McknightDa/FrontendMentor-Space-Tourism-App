import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-douglas",
  templateUrl: "./douglas.component.html",
  styleUrls: ["./douglas.component.css"],
})
export class DouglasComponent implements OnInit {
  constructor(public getCrew: DataService) {}

  ngOnInit(): void {}
}
