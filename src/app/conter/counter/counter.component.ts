import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter! : number;
  counterSubscription! : Subscription;
  counter$! : Observable<{counter : number}>;
  constructor(private store: Store<{ counter : CounterState }>) { }

  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe(data => {
    //   this.counter = data.counter;
    // })

    //Direct implementation using Async pipe
    this.counter$ = this.store.select('counter');
  }

  onIncrement(){
    this.store.dispatch(increment());
  }

  onDecrement(){
    this.store.dispatch(decrement());
  }

  onReset(){
    this.store.dispatch(reset());
  }

  ngOnDestroy(){
    if(this.counterSubscription){
        this.counterSubscription.unsubscribe();
    }
  }

}
