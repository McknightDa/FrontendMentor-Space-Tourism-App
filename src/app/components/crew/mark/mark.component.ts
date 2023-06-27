import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-mark",
  templateUrl: "./mark.component.html",
  styleUrls: ["./mark.component.css"],
})
export class MarkComponent implements OnInit {
  constructor(public getCrew: DataService) {}

  ngOnInit(): void {}
}
