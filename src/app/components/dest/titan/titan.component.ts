import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-titan",
  templateUrl: "./titan.component.html",
  styleUrls: ["./titan.component.css"],
})
export class TitanComponent implements OnInit {
  constructor(public getDest: DataService) {}

  ngOnInit(): void {}
}
