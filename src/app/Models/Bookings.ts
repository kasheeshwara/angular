export interface Bookings{
    id:number| null;
    productId:number|null;
    userId:number|null;
    reqDate:Date;
    problem:string;
    description:string;
    status:string;
}