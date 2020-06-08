import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'
// ng build (environment.ts)
// ng build --prod (environment.prod.ts)
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  urlServer = environment.url
  endpoint = '';
  constructor(private http : HttpClient) { }

  setEndPoint(endpoint) {
    this.endpoint = endpoint;
  }
  async get(queryParams = null){
    try {
      return await this.http.get(`${this.urlServer}${this.endpoint}`).toPromise();
    } catch (error){
      console.log(error);
      // 401 -> No tenes acceso al sitio
      // 500 -> Ups.. ocurrio un error
    }
  }
  async post(obj){
    try {
      // http://localhost:3000/api/devices = ${this.urlServer}${this.endpoint}
      // obj = {key : value}
      return await this.http.post(`${this.urlServer}${this.endpoint}`,obj).toPromise();
    } catch (error) {
      console.log(error);
    }
  } 
}
