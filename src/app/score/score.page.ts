import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  constructor() { }
  public no:number = 0;

  ngOnInit() {
  }

  up() {
    this.no += 1;
  }

  down() {
    if(this.no > 0) {
      this.no -= 1;
    }
  }

}
