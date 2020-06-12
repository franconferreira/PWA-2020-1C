import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{

  login(obj) {
    try {
      this.setEndPoint('auth');
      return this.post(obj)
    } catch (error) {
      throw error;
    }
  }
}
