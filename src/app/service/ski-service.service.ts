import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { SkiResortNameList } from '../ski-resorts/Model/SkiRisortNameList';
import { SkiResort } from '../ski-resorts/Model/skiResort';

const url= "http://localhost:3000/api/skiresorts";

@Injectable({
  providedIn: 'root'
})
export class SkiServiceService {

  constructor(private http: HttpClient) {
    
   }

   getAll():Observable<SkiResortNameList>{
    return this.http.get<SkiResortNameList>(url).pipe(map(data =>{
      return data;
    }
    ))
   }

   getAllResorts(id: number):Observable<SkiResort>{
    return this.http.get(url + "/" + id).pipe(map( data => new SkiResort(data)));
   }
}
