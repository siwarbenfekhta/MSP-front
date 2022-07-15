import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-resellers',
  templateUrl: './resellers.component.html',
  styleUrls: ['./resellers.component.css']
})
export class ResellersComponent implements OnInit {

  constructor(private titleService:Title) { this.titleService.setTitle("Revendeurs");}
  ngOnInit() {}

}
