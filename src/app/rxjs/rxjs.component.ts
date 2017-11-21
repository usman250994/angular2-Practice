import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/repeat';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
  encapsulation: ViewEncapsulation.None
})

// tslint:disable-next-line:one-line
export class RxjsComponent implements OnInit, User{
  userId: number;
  id: number;
  title: string;
  body: string;

 result: Observable<User>;
  ress: User;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get<User>('https://jsonplaceholder.typicode.com/posts/1').retry(1).repeat(1).subscribe(
      data => {
this.ress = data;
// putting returned array 'NOT OBJECT' into observable variable result.
 this.result = new Observable(ob => {ob.next(data); } );

 // console.log(this.result.subscribe(res => console.log(res)) );
  },
  (err: HttpErrorResponse) => {
console.log(err.message);
  });

  }
}
// creating an interface for api return type
interface User {
  userId: number;
  id: number;
  title: string;
  body: string;
}
