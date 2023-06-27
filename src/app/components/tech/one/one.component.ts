import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-one",
  templateUrl: "./one.component.html",
  styleUrls: ["./one.component.css"],
})
export class OneComponent implements OnInit {
  constructor(public getTech: DataService) {}

  ngOnInit(): void {}
}
