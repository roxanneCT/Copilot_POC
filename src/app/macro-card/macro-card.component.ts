import { Component, Input } from '@angular/core';

export interface IMacroData {
  icon: string;
  title: string;
  description?: string;
  dynamicData?: any;
}

@Component({
  selector: 'app-macro-card',
  templateUrl: './macro-card.component.html',
  styleUrls: ['./macro-card.component.css']
})
export class MacroCardComponent {
  @Input() macroData: IMacroData;
  panelOpenState = false;

  unsorted() { 
    return 0;
  }

}
