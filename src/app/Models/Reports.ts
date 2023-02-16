export interface Reports{
    id:number| null;
    serReqId:number|null;
    reportDate:Date;
    serviceType:string;
    actionTaken:string;
    diagnosisDetails:string;
    isPaid:string;
    visitFees:number;
    repairDetails:string;
}