import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AutoCompleteComponent,
      multi: true,
    },
  ],
})
export class AutoCompleteComponent implements OnInit {
  @Input() options: { id: number; name: string }[] = [];
  @Input() isReactive: boolean = false;
  control: FormControl = new FormControl();
  filteredOptions!: Observable<{ id: number; name: string }[]>;

  private _innerValue: number | null = null;
  onChange = (value: number | null) => {};
  onTouched = () => {};

  get innerValue(): number | null {
    return this._innerValue;
  }

  ngOnInit() {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );

    // Set value for reactive form
    if (this.isReactive) {
      this.control.setValue(
        this._innerValue ? this.getNameById(this._innerValue) : ''
      );
    }
  }

  private _filter(value: string): { id: number; name: string }[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  writeValue(value: number | null): void {
    this._innerValue = value;
    // Update control value for reactive form
    if (this.isReactive) {
      this.control.setValue(
        this._innerValue ? this.getNameById(this._innerValue) : ''
      );
    }
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
    this.control.valueChanges.subscribe((name) => {
      const selectedOption = this.options.find(
        (option) => option.name === name
      );
      this.onChange(selectedOption ? selectedOption.id : null);
    });
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private getNameById(id: number): string | undefined {
    return this.options.find((option) => option.id === id)?.name;
  }
}
