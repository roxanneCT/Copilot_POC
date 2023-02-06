import { Component } from '@angular/core';
import { IMacroData } from '../macro-card/macro-card.component';
import { macroAutoFillRecord, macroCloneRecord, macroSaveRecord, macroStartExcution } from './constants';

@Component({
  selector: 'app-nl-to-macro',
  templateUrl: './nl-to-macro.component.html',
  styleUrls: ['./nl-to-macro.component.css']
})
export class NlToMacroComponent {
  macroFlow: IMacroData[] = [];


  // TODO: call AI model's API to get output JSON and convert it into macroFlow
  generateFlow(inputText: string){
    if (inputText.indexOf("clone") >= 0) {
      this.macroFlow = [
        macroStartExcution,
        macroAutoFillRecord,
        macroCloneRecord,
        macroSaveRecord
      ];
    }
    else if (inputText.indexOf("full name") >=0) {
      this.macroFlow = [
        macroStartExcution,
        macroAutoFillRecord,
        macroCloneRecord,
        macroSaveRecord
      ];
    }
    else { // set to empty
      this.macroFlow = [];
    }
  }
}
