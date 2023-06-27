import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-europa",
  templateUrl: "./europa.component.html",
  styleUrls: ["./europa.component.css"],
})
export class EuropaComponent implements OnInit {
  constructor(public getDest: DataService) {}

  ngOnInit(): void {}
}
