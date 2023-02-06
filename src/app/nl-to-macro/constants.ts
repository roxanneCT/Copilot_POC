import { IMacroData } from "../macro-card/macro-card.component";

export const defaultDesc: string = "No additional information is needed for this step. You will be able to use the outputs in subsequent steps.";
export const nullValue: string = "---";

export const macroStartExcution: IMacroData = {
    icon: "start",
    title: "Start macro execution",
    description: defaultDesc
}

export const macroSaveRecord: IMacroData = {
    icon: "save",
    title: "Save the record",
    description: defaultDesc
}

export const macroAutoFillRecord: IMacroData = {
    icon: "edit-note",
    title: "This macro will autofill form fields based on the information you provide",
    dynamicData: {
        "Entity logical name": "incident",
        "Attribute Name-1": "ticketnumber",
        "Attribute Value-1": nullValue,
        "Attribute Name-2": "parentcaseid",
        "Attribute Value-2": '[{"id": "{anchor.incidentid}", "name": "{anchor.title}", "entitytype": "incident"}]'
    }
}

export const macroCloneRecord: IMacroData = {
    icon: "edit-note",
    title: "This macro will clone the record in the current tab and open it in a new tab as new unsaved record",
    dynamicData: {
        "Record title": "Child case of {anchor.title}"
    }
}