
export interface Column {
    S_No: number
    First_name: string
    Middle_Name: string
    Last_Name: string 
    Email_address:string
    phone:string
    Registered_On:string
 }

 export interface client_column{
     Client_id:number
     First_name:string
     Middle_name:string
     Last_name:string
     Email:string
     Mobile:string
     Case_status:string
     Status:string
 }

 export interface staff_column{
     S_no:number
     First_name:string
     Last_name:string
     Email:string
     Status:string
     Action:any
 }

 export interface Earning_column
 {
     S_no:number
     User_Id:number
     First_name:string
     Last_name:string
     Email:string
     Mobile_No:number
     Transaction_status:string
     Amount_Paid:string
     Date_Time:string
 }

 export interface TableColumn {
    heading: string;
    key: string;
    sort?: boolean;
    type: string;
    link:string
    align?: 'right' | 'left' | 'center';
  }