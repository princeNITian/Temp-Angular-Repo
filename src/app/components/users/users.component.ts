import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address:{
      street: '',
      city: '',
      state: ''
    }
  }
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses  = {};
  currentStyles = {};
  showUserForm:boolean = false;

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
          registered: new Date('01/05/2017 08:30:00'),
          hide: true
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
          registered: new Date('09/07/2017 10:30:00'),
          hide: false
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
          registered: new Date('01/02/2018 17:00:00'),
          hide: true
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

  addUser(){
    this.users.unshift(this.user);
    this.user.isActive = true;
    this.user.balance = 0;
    this.user.image = 'data:image/jpeg;base64,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'
    this.user.registered = new Date();

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
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

// toggleHide(user:User) {
//   user.hide = ! user.hide;
// }

onSubmit(e){
  console.log(1111);
  e.preventDefault();
}

fireEvent(e) {
  console.log(e.target.value);
}

}
