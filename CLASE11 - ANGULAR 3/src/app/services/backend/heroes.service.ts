import { Injectable } from '@angular/core';
import { BaseService } from '../common/base.service';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceBackend extends BaseService{
  // Service hereda baseservice
  async getHeroes() {
    try {
      this.setEndPoint('heroes');
      // environment.url + endpoint -> http://localhost:3000/heroes
      return this.get();
    } catch (error) {
      throw error;
    }
  }
  async createHeroe(obj) {
    try {
      this.setEndPoint('heroes/new');
      return this.post(obj);
    } catch (error) {
      throw error;
    }
  }
}
