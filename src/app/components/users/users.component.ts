import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses  = {};
  currentStyles = {}

  constructor() { }


  ngOnInit() {
   
      this.users = [
        {
          firstName: "Prince",
          lastName: "Raj",
          age: 21,
          address: {
            street: '20 Mushkipur Kothi',
            city: 'Gogri Jamalpur',
            state: 'Bihar'
          },
          image: "http://www.lorempixel.com/300/200/people/3",
          isActive: true,
          balance: 2000,
          registered: new Date('01/05/2017 08:30:00')
        },
        {
          firstName: "Priyanshu",
          lastName: "Raj",
          age: 15,
          address: {
            street: '20 Mushkipur Kothi',
            city: 'Begusarai',
            state: 'Bihar'
          },
          image: "http://www.lorempixel.com/300/200/people/2",
          isActive: false,
          balance: 5000,
          registered: new Date('09/07/2017 10:30:00')
        },
        {
          firstName: "Priyanka",
          lastName: "Roy",
          age: 20,
          address: {
            street: '20 Mushkipur Kothi',
            city: 'Khagaria',
            state: 'Bihar'
          },
          image: "http://www.lorempixel.com/300/200/people/1",
          isActive: true,
          balance: 3000,
          registered: new Date('01/02/2018 17:00:00')
        }
      ];
      this.loaded = true;
    

     

  // passing user as first user of users array
  // this.addUser({
  //   firstName : "Priyanka",
  //   lastName : "Kumari",
  // })
  this.users.unshift(this.users[2])
  this.showExtended = true;
  this.setCurrentClasses();
  this.setCurrentStyles();
  


  }

  addUser(user: User){
    this.users.push(user);
  }

  setCurrentClasses (){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    }
  }

  setCurrentStyles () {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0px': '50px',
      'font-size' : this.showExtended ? '' : '40px'
    }
  }

}
