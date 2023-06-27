import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Crew } from "src/app/components/classes/crew";
import { Dest } from "src/app/components/classes/dest";
import { Tech } from "../components/classes/tech";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}
  active: String = "home";
  activeDestbar: number = 0;
  crewData: any = [];
  destData: any = [];
  techData: any = [];
  activeSubCrewNavBar = 0;
  isMobile: boolean = window.innerWidth < 376;
  activeTechSub = 1;
  allURL = "https://space-tourism-app-9a134-default-rtdb.firebaseio.com/";
  crewURL =
    "https://space-tourism-app-9a134-default-rtdb.firebaseio.com/crew.json";
  destinationURL =
    "https://space-tourism-app-9a134-default-rtdb.firebaseio.com/destinations.json";
  technologyURL =
    "https://space-tourism-app-9a134-default-rtdb.firebaseio.com/technology.json";
  jsonEXT = ".json";

  getAllCrew(): Observable<any> {
    return this.http.get<Crew>(this.crewURL);
  }
  setActive(str: String) {
    this.active = str;
  }
  getActive() {
    return this.active;
  }
  getAllDest(): Observable<any> {
    return this.http.get<Dest>(this.destinationURL);
  }
  getAllTech(): Observable<any> {
    return this.http.get<Tech>(this.technologyURL);
  }
}
