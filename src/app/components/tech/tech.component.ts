import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tech",
  templateUrl: "./tech.component.html",
  styleUrls: ["./tech.component.css"],
})
export class TechComponent implements OnInit {
  techData: any = [];
  fetchedData: boolean = false;
  constructor(public getTech: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getTechData();
    this.router.navigate(["tech/one"]);
  }
  getTechData() {
    return this.getTech.getAllTech().subscribe((data) => {
      this.techData = Object.keys(data).map((f) => {
        return { ...data[f], id: f };
      });
      this.getTech.techData = this.techData;

      // this.imageURL = "../assets/crew/image-douglas-hurley.png";
      this.fetchedData = true;
      // this.imageURL = "../assets/crew/image-douglas-hurley.png";
      // this.imageURL = "." + this.crewData[0].images.webp;
      // console.log(this.getTech.techData);
    });
  }
}
