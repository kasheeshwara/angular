import { DecimalPipe } from "@angular/common";

export interface Product{
    id:number;
    name:string;
    make:string;
    model:string
    cost:DecimalPipe|null;
    createdDate:Date;
}