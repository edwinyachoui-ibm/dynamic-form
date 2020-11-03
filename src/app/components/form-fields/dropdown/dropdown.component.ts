import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataModel} from '../../../model/dataModel';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  @Input() dataType: string;
  @Input() label: string;
  @Input() options: DataModel[];
  @Input() formControlName: string;
  @Output() selectOnChange: EventEmitter<number> = new EventEmitter<number>();
  private disabled: boolean;
  private value: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(id): void {
    this.selectOnChange.emit(id);
  }
  selectionChanged(event): void {
    this.onChange(event.value);
    this.onTouched();
  }

  onChange: any = () => { };
  onTouched: any = () => { };
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  writeValue(value: any): void {
    this.value = value;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
