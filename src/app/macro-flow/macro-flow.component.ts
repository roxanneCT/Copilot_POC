import { Component, Input } from '@angular/core';
import { IMacroData } from '../macro-card/macro-card.component';

@Component({
  selector: 'app-macro-flow',
  templateUrl: './macro-flow.component.html',
  styleUrls: ['./macro-flow.component.css']
})
export class MacroFlowComponent {
  @Input() macroFlow: IMacroData[] = [];

  ngOnChanges(changes: any) {
    if (!changes.macroFlow.firstChange){
      this.macroFlow = changes['macroFlow']['currentValue'];
      console.log(this.macroFlow)
    }
  }

  showArrow(index: number) {
    return index < this.macroFlow.length - 1;
  }

  saveMacroFlow() {
    alert("Macro Flow Saved!")
  }
}
