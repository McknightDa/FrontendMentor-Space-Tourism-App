import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/service/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dest",
  templateUrl: "./dest.component.html",
  styleUrls: ["./dest.component.css"],
})
export class DestComponent implements OnInit {
  destData: any = [];
  fetchedData: Boolean = false;
  data: any;
  constructor(public getDest: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getDestData();
    this.router.navigate(["dest/moon"]);
  }
  getDestData() {
    return this.getDest.getAllDest().subscribe((data) => {
      this.destData = Object.keys(data).map((f) => {
        return { ...data[f], id: f };
      });
      this.getDest.destData = this.destData;
      // this.imageURL = "../assets/crew/image-douglas-hurley.png";
      this.fetchedData = true;
      // this.imageURL = "../assets/crew/image-douglas-hurley.png";
      // this.imageURL = "." + this.crewData[0].images.webp;
      // console.log(this.getDest.destData);
    });
  }
}
