import { Component, OnInit } from '@angular/core';
import '../assets/appFiles/app.js'
import $ from "jquery";
declare var initialize: any;
declare var startRecording: any;


// declare var recordB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}

  title = 'VoiceRecogn';
  ngOnInit() {
    this.initializeVar();
  }

  public initializeVar() : void {
    initialize.funcDeclar();
  }

  public recordSound(time) {
    startRecording.start(time);

  }

}
