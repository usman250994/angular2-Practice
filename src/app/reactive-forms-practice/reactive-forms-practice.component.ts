import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states, Address, Hero } from '../data-model';
@Component({
  selector: 'app-reactive-forms-practice',
  templateUrl: './reactive-forms-practice.component.html',
  styleUrls: ['./reactive-forms-practice.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReactiveFormsPracticeComponent implements OnInit {
myReactiveForm: FormGroup;
states = states;
hero = new Hero();
  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  createForm() {
    console.log('heroo', this.hero);
  // previously using long hierarchy but now a bit more efficient way to do.

    this.myReactiveForm = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ], // <-- a FormGroup with a new address
      power: '',
      sidekick: ''
    });
  }
  ngOnInit() {
  }

}
