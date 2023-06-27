import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-three",
  templateUrl: "./three.component.html",
  styleUrls: ["./three.component.css"],
})
export class ThreeComponent implements OnInit {
  constructor(public getTech: DataService) {}

  ngOnInit(): void {}
}
