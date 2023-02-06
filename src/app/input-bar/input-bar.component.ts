import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent {
  @Output() generateButtonClicked = new EventEmitter<string>();
  
  myControl = new FormControl('');
  filteredOptions: Observable<string[]>;
  
  options: string[] = [
    'I want to update the description field with customer full name, then save it', 
    // 'I want to update the description field with customer email address, then save it', 
    'I want to clone a record, then save it.'
  ];
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  generateMacroFlow(){
    if (this.myControl.value) {
      this.generateButtonClicked.emit(this.myControl.value);
    }
  }

  isDisabled(){
    return !(this.myControl.value?.length && this.myControl.value?.length > 0);
  }
}
