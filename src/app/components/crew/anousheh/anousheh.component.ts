import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-anousheh",
  templateUrl: "./anousheh.component.html",
  styleUrls: ["./anousheh.component.css"],
})
export class AnoushehComponent implements OnInit {
  constructor(public getCrew: DataService) {}

  ngOnInit(): void {}
}
