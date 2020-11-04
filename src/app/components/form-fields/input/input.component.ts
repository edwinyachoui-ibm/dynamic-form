import {Component, ElementRef, forwardRef, Input, OnInit, Self, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  }],
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @ViewChild('input') input: ElementRef;
  disabled;

  @Input() type = 'text';
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;
  fieldId = `id-${+(new Date())}`;
  private value: object;

  constructor() {
  }

  ngOnInit(): void {}

  onChange(event): void { }

  onTouched(): void { }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
