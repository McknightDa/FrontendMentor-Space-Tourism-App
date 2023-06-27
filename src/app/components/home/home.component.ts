import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private getActive: DataService) { }
  activeData: String = "";
  isMobile: boolean = true;
  ngOnInit(): void {
  }

  dest() {
    this.getActive.setActive("dest");
    this.isMobile = this.getActive.isMobile;
  }
}
