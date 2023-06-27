import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-mars",
  templateUrl: "./mars.component.html",
  styleUrls: ["./mars.component.css"],
})
export class MarsComponent implements OnInit {
  constructor(public getDest: DataService) {}

  ngOnInit(): void {}
}
