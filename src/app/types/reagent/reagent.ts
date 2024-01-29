import {ReagentStatus} from "./reagent-status";

export interface User {
    reagentID : number;
    reagentName : string;
    reagentDescription : string;
    expirationDate : Date;
    quantityInStock : number;
    reagentSerialNumber : string;
    reagentStatus : ReagentStatus;
    supplier : string;
}