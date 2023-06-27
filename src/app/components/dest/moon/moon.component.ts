import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-moon",
  templateUrl: "./moon.component.html",
  styleUrls: ["./moon.component.css"],
})
export class MoonComponent implements OnInit {
  constructor(public getDest: DataService) {}

  ngOnInit(): void {}
}
