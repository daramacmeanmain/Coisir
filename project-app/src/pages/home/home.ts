import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Coisir } from '../../providers/coisir';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  user: any;
  posts: any;
  data: any;
  //username: any;
  uParam: any;

  constructor(public nav: NavController, public coisirService: Coisir, public alertCtrl: AlertController, public http: Http, public navParams: NavParams) {
      
     }
    
     ionViewDidLoad(){
      this.uParam = this.navParams.get('username');
       this.coisirService.getPosts().then((data) => {
         console.log(data);
         console.log(this.uParam);
         this.posts = data;
         this.user = this.coisirService.user;
       });
    
     }

     logout(){
      this.coisirService.logout();
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
              this.coisirService.createPost({title: data.title, uParam: this.uParam});
            }
          }
        ]
      });

      prompt.present();
      }
    }
