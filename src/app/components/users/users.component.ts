import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses  = {};
  currentStyles = {};
  showUserForm:boolean = false;
  @ViewChild("userForm") form: any;
  data: any;

  constructor(private dataService: DataService) { }


  ngOnInit() {

    this.dataService.getData().subscribe(data =>{
      console.log(data);
    });
   
    this.dataService.getUsers().subscribe(users =>{
      this.users = users;
      this.loaded = true;
    })
      
      
    

     

  // passing user as first user of users array
  // this.addUser({
  //   firstName : "Priyanka",
  //   lastName : "Kumari",
  // })
  this.users.unshift(this.users[2])
  //this.dataService.addUser(this.users[2]);
  this.showExtended = true;
  this.setCurrentClasses();
  this.setCurrentStyles();
  


  }

  addUser(){
    this.users.unshift(this.user);
    this.user.isActive = true;
    this.user.balance = 0;
    this.user.image = "http://www.lorempixel.com/300/200/people/1";
    this.user.registered = new Date();

    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  setCurrentClasses (){
    this.currentClasses = {
      'btn-success': true,
      'big-text': this.showExtended,
    }
  }

  setCurrentStyles () {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0px': '50px',
      'font-size' : this.showExtended ? '' : '40px'
    }
  }



onSubmit({value,valid}:{value:User,valid:boolean}){
  if(!valid){
    console.log('Form is not valid.');
  }else{
    value.isActive = true;
    value.registered = new Date();
    value.image = "http://www.lorempixel.com/300/200/people";
    value.balance = 0;
    value.hide = true;
    this.dataService.addUser(value);
    this.form.reset();
  }

}

}
