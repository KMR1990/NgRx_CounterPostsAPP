import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customCounter } from '../state/counter.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {

  valueEntered! : number;

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
  }

  AddToCounter(){
    this.store.dispatch(customCounter({valueEntered : this.valueEntered}))
  }

}
