import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl, ValidatorFn, Validators} from '@angular/forms';
import {MyOption} from '../../../model/MyOption';
import {CountriesEnum, ProvincesEnum} from '../../../data/data';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true,
  }],
})
export class DropdownComponent implements OnInit, ControlValueAccessor, Validators {
  @Input() data: MyOption<CountriesEnum | ProvincesEnum, string>;
  @Input() label: string;
  @Input() isRequired = false;
  @Input() hasError: boolean;
  @Input() errorMsg: string;
  private value: object;


  constructor() {}

  ngOnInit(): void {}

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
