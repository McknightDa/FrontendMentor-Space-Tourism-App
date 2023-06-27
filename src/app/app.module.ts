import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CrewComponent } from "./components/crew/crew.component";

import { DataService } from "./service/data.service";
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DouglasComponent } from './components/crew/douglas/douglas.component';
import { SubnavComponent } from './components/crew/subnav/subnav.component';
import { MarkComponent } from './components/crew/mark/mark.component';
import { VictorComponent } from './components/crew/victor/victor.component';
import { AnoushehComponent } from './components/crew/anousheh/anousheh.component';
import { DestComponent } from './components/dest/dest.component';
import { MoonComponent } from './components/dest/moon/moon.component';
import { DestnavbarComponent } from './components/dest/destnavbar/destnavbar.component';
import { MarsComponent } from './components/dest/mars/mars.component';
import { EuropaComponent } from './components/dest/europa/europa.component';
import { TitanComponent } from './components/dest/titan/titan.component';
import { TechComponent } from './components/tech/tech.component';
import { TechsubnavComponent } from './components/tech/techsubnav/techsubnav.component';
import { OneComponent } from './components/tech/one/one.component';
import { TwoComponent } from './components/tech/two/two.component';
import { ThreeComponent } from './components/tech/three/three.component';

@NgModule({
  declarations: [AppComponent, CrewComponent, HomeComponent, NavbarComponent, DouglasComponent, SubnavComponent, MarkComponent, VictorComponent, AnoushehComponent, DestComponent, MoonComponent, DestnavbarComponent, MarsComponent, EuropaComponent, TitanComponent, TechComponent, TechsubnavComponent, OneComponent, TwoComponent, ThreeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
