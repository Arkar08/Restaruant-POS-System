import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const data = "http://localhost:9090/api/v1/rooms"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(data)
  }
  postData(Data:any):Observable<any>{
    return this.http.post<any>(data,Data)
  }
}
