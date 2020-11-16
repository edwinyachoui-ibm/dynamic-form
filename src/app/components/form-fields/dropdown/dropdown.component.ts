import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {MyOptionModel} from '../../../model/my-option.model';
import {CountriesEnum, ProvincesEnum} from '../../../enum/enum';

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
  @Input() data: MyOptionModel<CountriesEnum | ProvincesEnum, string>;
  @Input() label: string;
  @Input() isRequired = false;
  @Input() hasError: boolean;
  @Input() errorMsg: string;
  public value: string;


  constructor() {
  }

  ngOnInit(): void {
    if (this.data.value in (CountriesEnum || ProvincesEnum)) {
      console.log('this.data.value found!', this.data.value);
    } else {
      this.hasError = true;
      console.log(this.data.value, 'Does not exist');
    }
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
