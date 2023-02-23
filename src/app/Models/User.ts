export interface User{
    id:number;
    name:string;
    password:string;
    email:string
    mobile:number|null;
    registeredDate:Date;
    token:string;
    role:string;
}