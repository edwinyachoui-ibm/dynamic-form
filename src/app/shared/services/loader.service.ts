import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public onChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  show(): void {
    this.onChange.next(true);
  }

  hide(): void {
    this.onChange.next(false);
  }
}
