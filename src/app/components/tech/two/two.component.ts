import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-two",
  templateUrl: "./two.component.html",
  styleUrls: ["./two.component.css"],
})
export class TwoComponent implements OnInit {
  constructor(public getTech: DataService) {}

  ngOnInit(): void {}
}
