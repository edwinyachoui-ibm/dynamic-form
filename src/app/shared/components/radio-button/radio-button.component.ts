import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {MyOptionModel} from '../../../model/my-option.model';
import {TrumpEnum} from '../../../enum/enum';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true,
  }],
})
export class RadioButtonComponent implements OnInit, ControlValueAccessor, Validators {
  @Input() data: MyOptionModel<TrumpEnum, string>;
  @Input() legend: string;
  @Input() isRequired = false;
  private value: object;
  constructor() { }

  ngOnInit(): void {
  }

  onChange(event): void {
  }

  onTouched(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.value = value;
  }

}
