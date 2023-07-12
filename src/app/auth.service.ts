import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '111222') {
      return true;
    } else {
      return false;
    }
  }

}
