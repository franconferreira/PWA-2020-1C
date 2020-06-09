import { Injectable } from '@angular/core';
import { BaseService } from '../common/base.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceBackend extends BaseService{
  // Service hereda baseservice
  async createHeroe(obj) {
    try {
      this.setEndPoint('heroes/new');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }
  async getAll() {
    try {
      this.setEndPoint('heroes/all');
      return this.get();
    } catch (error) {
      throw error;
    }
  }
  async getSingle(id) {
    try {
      this.setEndPoint(`heroes/single/${id}`);
      return this.get();
    } catch (error) {
      throw error;
    }
  }
}
