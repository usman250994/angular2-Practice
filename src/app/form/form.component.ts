import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NewHero} from '../newhero';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  ngOnInit() {}
// tslint:disable-next-line:member-ordering
model = new NewHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

// tslint:disable-next-line:member-ordering
submitted = false;

onSubmit() { this.submitted = true; }

newHero() {
this.model = new NewHero(42, '', '');
}
}


