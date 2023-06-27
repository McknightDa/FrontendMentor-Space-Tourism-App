import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//Crew Component
import { CrewComponent } from "./components/crew/crew.component";
import { HomeComponent } from "./components/home/home.component";
import { DouglasComponent } from "./components/crew/douglas/douglas.component";
import { MarkComponent } from "./components/crew/mark/mark.component";
import { VictorComponent } from "./components/crew/victor/victor.component";
import { AnoushehComponent } from "./components/crew/anousheh/anousheh.component";

//Dest Component
import { DestComponent } from "./components/dest/dest.component";
import { MoonComponent } from "./components/dest/moon/moon.component";
import { MarsComponent } from "./components/dest/mars/mars.component";
import { EuropaComponent } from "./components/dest/europa/europa.component";
import { TitanComponent } from "./components/dest/titan/titan.component";

//Tech Component
import { TechComponent } from "./components/tech/tech.component";
import { OneComponent } from "./components/tech/one/one.component";
import { TwoComponent } from "./components/tech/two/two.component";
import { ThreeComponent } from "./components/tech/three/three.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "crew",
    component: CrewComponent,
    children: [
      { path: "douglas", component: DouglasComponent },
      { path: "mark", component: MarkComponent },
      { path: "victor", component: VictorComponent },
      { path: "anousheh", component: AnoushehComponent },
    ],
  },
  {
    path: "dest",
    component: DestComponent,
    children: [
      { path: "moon", component: MoonComponent },
      { path: "mars", component: MarsComponent },
      { path: "europa", component: EuropaComponent },
      { path: "titan", component: TitanComponent },
    ],
  },
  {
    path: "tech",
    component: TechComponent,
    children: [
      { path: "one", component: OneComponent },
      { path: "two", component: TwoComponent },
      { path: "three", component: ThreeComponent },
    ],
  },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
