import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState, selectLoader} from '../../../store';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  loader$: Observable<boolean>;
  loader: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private store: Store<AppState>) {
    this.loader$ = this.store.pipe(select(selectLoader));
  }

  ngOnInit(): void {
  }

}
