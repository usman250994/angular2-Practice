import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-random-child',
  templateUrl: './random-child.component.html',
  styleUrls: ['./random-child.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RandomChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
