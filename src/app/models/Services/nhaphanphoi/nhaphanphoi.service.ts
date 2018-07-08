import { ICompanys } from './../../Entity/companys.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from '../../../../../quanlisieuthi/node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class NhaphanphoiService {

  constructor(private http: Http, private router: Router) {

  }

  createNPP(icompany: ICompanys) {
    return this.http.post("http://localhost:3000/company", icompany).pipe(map(res => {
      console.log(res);
      return res.json();
    }))
  }
  getNPP(): Observable<any> {
    return this.http.get("http://localhost:3000/company").pipe(map(res => {
      console.log(res);
      return res.json() as ICompanys[];
    }))
  }
  getOneNPPByID(id: String): Observable<ICompanys> {
    return this.getNPP().pipe(map(npp => {
      return npp.find(nppid => {
        return nppid.id == id;
      })
    }))
  }
  upDateNPP(id: Number,icompany: ICompanys): Observable<any>{
    return this.http.put("http://localhost:3000/company/"+id, icompany)
  }
  deleteNPP(id: Number): Observable<any>{
    return this.http.delete("http://localhost:3000/company/"+id);
  }
}
