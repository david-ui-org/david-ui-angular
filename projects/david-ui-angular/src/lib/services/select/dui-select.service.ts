import { Injectable } from '@angular/core';
import { SelectComponent } from '../../components/select/select.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DuiSelectService {
  private select!: SelectComponent;

  public afterClosed : BehaviorSubject<boolean | undefined> = new BehaviorSubject<boolean | undefined>(undefined);

  public registerSelectInstance(select: SelectComponent) {
    this.select = select;
  }

  public getSelectInstance(): SelectComponent {
    return this.select;
  }

  public shouldClosed(show: boolean) {
    debugger;
    this.afterClosed.next(show)
  }
}
