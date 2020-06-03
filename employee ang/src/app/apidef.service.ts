import { Injectable, ɵNG_ELEMENT_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidefService {

  constructor(public http:HttpClient) { }

 
  public newEmployer(User) {
    return this.http.post("http://localhost:8080/employee/new",User,{responseType:'text' as 'json'});
  }

  public employeelist(){
    return this.http.get("http://localhost:8080/employee/fulllist");
  }

  public employerById(Id){
    return this.http.get("http://localhost:8080/employee/details/"+Id);
  }

  public deleteById(Id){
    return this.http.delete("http://localhost:8080/employee/del/"+Id);
  }
}
