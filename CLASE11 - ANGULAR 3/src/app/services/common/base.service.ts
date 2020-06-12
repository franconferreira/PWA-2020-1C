import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment'
import { Router } from '@angular/router';
// ng build (environment.ts)
// ng build --prod (environment.prod.ts)
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  urlServer = environment.url
  endpoint = '';
  constructor(private http : HttpClient,private router : Router) { }

  private getHTTPOptions() {
    let httpOptions = {};
    if(sessionStorage.getItem('auth')){ 
      httpOptions = {
        headers : new HttpHeaders({
          Authorization : `Bearer ${JSON.parse(sessionStorage.getItem('auth')).JWT}`
        })
      }
    }
    return httpOptions;
  }

  proccessError(obj) {
    if(obj.status == 401) {
      this.router.navigate(['login'])
      // navigate ( permisosPage  ) -> no tenes acceso a este sitio 
    } else if(obj.status == 404) {
      // not found page
    }
  }
  setEndPoint(endpoint) {
    this.endpoint = endpoint;
  }
  async get(queryParams = null){
    try {
      const options = this.getHTTPOptions()
      return await this.http.get(`${this.urlServer}${this.endpoint}`,options).toPromise();
    } catch (error){
      console.log(error);
      this.proccessError(error)
    }
  }
  async post(obj){
    try {
      const options = this.getHTTPOptions()
      return await this.http.post(`${this.urlServer}${this.endpoint}`,obj,options).toPromise();
    } catch (error) {
      console.log(error);
      this.proccessError(error)

    }
  } 
}
