import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 
  database:any={
    1001:{userid:1001,username:"shyam",password:"1000",events:[]}
  }

  constructor() { }
  login(userid:any,password:any){
  
    let db=this.database

    if (userid in db){
      if(password == db[userid]["password"]){
         return true
      }
      else{
        alert("wrong password")
        return false
    }
  }
    else{
      alert("invalid userid")
      return false
    }
  }
}
