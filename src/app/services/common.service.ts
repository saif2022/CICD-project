import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

   //Prod
   subscrib_news_leter =''
   applyNow =''
   affiliator = ''
   applyForEvent = ''
  constructor(private http: HttpClient, private router: Router) {}

  

  // ************************* subscribe News letter *************************************************
  subscribeNewsletter(data: any): Observable<any> {
    let token = localStorage.getItem('token');
    let result= this.http.post(this.subscrib_news_leter, data);
    return result; 
  }

  // ************************* END subscribe News letter 

  // ************************* APPLY NOW *************************************************

  emailValidation(email:any): Observable<any> {
    // let token = localStorage.getItem('token');
    const headers = {"email":email}
    
     let result= this.http.get('',{headers:new HttpHeaders({"email":email})}) ;
    return result; 
  }

  putApplication(data: any): Observable<any> {
    // let token = localStorage.getItem('token');
    let result= this.http.post(this.applyNow, data);
    return result; 
  }

    // ************************* END APPLY NOW 




      // ************************* Affiliator *************************************************

        putAffiliator(data: any): Observable<any> {
            // let token = localStorage.getItem('token');
            let result= this.http.post(this.affiliator, data);
            return result; 
        }

      // ************************* END Affiliator


       // ************************* EventApplication *************************************************

       applyEvent(data: any): Observable<any> {
        // let token = localStorage.getItem('token');
        let result= this.http.post(this.applyForEvent, data);
        return result; 
    }

  // ************************* END Affiliator
}
