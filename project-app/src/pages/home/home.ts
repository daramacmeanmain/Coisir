import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Users } from '../../providers/users';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  
  users: any;
  data: any;

  constructor(public nav: NavController, public userService: Users) {
    
     }
    
     ionViewDidLoad(){
    
       this.userService.getUsers().then((data) => {
         console.log(data);
         this.users = data;
       });
    
     }
  
  }
