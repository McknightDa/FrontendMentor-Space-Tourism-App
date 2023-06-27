import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "src/app/service/data.service";

@Component({
  selector: "app-crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.css"],
})
export class CrewComponent implements OnInit {
  constructor(public getCrew: DataService, private router: Router) {}
  crewData: any = [];
  fetchedData: boolean = false;
  imageURL: String = "";
  data: any;
  ngOnInit(): void {
    this.getCrewData();
    this.router.navigate(["crew/douglas"]);
  }

  getCrewData() {
    return this.getCrew.getAllCrew().subscribe((data) => {
      this.crewData = Object.keys(data).map((f) => {
        return { ...data[f], id: f };
      });
      this.getCrew.crewData = this.crewData;
      this.fetchedData = true;
    });
  }
}
