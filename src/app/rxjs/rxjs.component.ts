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
export class RxjsComponent implements OnInit{

  userId: number;
 result: Observable<Object>;
ress: any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').retry(1).repeat(1).subscribe(
      data => {
this.ress = data;
 this.result = new Observable(ob => {ob.next(data); } );
    console.log(this.result.subscribe(res => console.log(res)) );
  },
  (err: HttpErrorResponse) => {
console.log(err.message);
  });

  }
}
