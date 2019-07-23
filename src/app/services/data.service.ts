import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() { 
    this.users = [
      {
        firstName: "Prince",
        lastName: "Raj",
        email: 'princeraj@gmail.com',
        image: "http://www.lorempixel.com/300/200/people/3",
        isActive: true,
        balance: 2000,
        registered: new Date('01/05/2017 08:30:00'),
        hide: true
      },
      {
        firstName: "Priyanshu",
        lastName: "Raj",
        email: 'priyanshu@gmail.com',
        image: "http://www.lorempixel.com/300/200/people/2",
        isActive: false,
        balance: 5000,
        registered: new Date('09/07/2017 10:30:00'),
        hide: false
      },
      {
        firstName: "Priyanka",
        lastName: "Roy",
        email: 'priyankaroy@gmail.com',
        image: "http://www.lorempixel.com/300/200/people/1",
        isActive: true,
        balance: 3000,
        registered: new Date('01/02/2018 17:00:00'),
        hide: true
      }
    ];
  }
  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User){
    this.users.unshift(user);
  }
}
