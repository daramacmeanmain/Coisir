import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Users } from '../../providers/users';
import { LoginPage } from '../login/login';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  
  posts: any;
  data: any;

  constructor(public nav: NavController, public userService: Users, public alertCtrl: AlertController) {
    
     }
    
     ionViewDidLoad(){
    
       this.userService.getPosts().then((data) => {
         console.log(data);
         this.posts = data;
       });
    
     }

     logout(){
      this.userService.logout();
      this.posts = null;
      this.nav.setRoot(LoginPage);
    }

    createPost(){
      let prompt = this.alertCtrl.create({
        title: 'New',
        message: 'Create new post',
        inputs: [
          {
            name: 'title'
          }
        ],
        buttons: [
          {
            text: 'Cancel'
          },
          {
            text: 'Save',
            handler: data => {
              this.userService.createPost({title: data.title});
            }
          }
        ]
      });

      prompt.present();
    }
  
  }
