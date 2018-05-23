import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Coisir } from '../../providers/coisir';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import 'rxjs/add/operator/map';
import { OptionsPage } from '../options/options';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  user: any;
  post: any;
  posts: any;
  data: any;
  username: any;
  uParam: any;
  pParam: any;
  pId: any;

  constructor(public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController, public nav: NavController, public coisirService: Coisir, public alertCtrl: AlertController, public http: Http, public navParams: NavParams) {
      
     }
    
     ionViewDidLoad(){
      this.uParam = this.navParams.get('username');
       this.coisirService.getPosts().then((data) => {
         console.log(data);
         console.log(this.uParam);
         //this.pId = this.data["_id"];
         //console.log(this.pId)
         this.posts = data;
         this.user = this.coisirService.user;
         this.username = this.uParam;
         console.log(this.username)
         //console.log(this.post._id)
       });
    
     }

     getId(){
      this.pId = this.navParams.get('pId');
      //this.nav.setRoot(HomePage, {username: this.username});
      console.log(this.pId);
    }

     presentModal() {
      let modal = this.modalCtrl.create(OptionsPage);
      //let pId = this.data._id;
      //console.log(this.pId)
      this.nav.push(OptionsPage, {post_id: this.pId});
      modal.present();
    }

    presentActionSheet(post) {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Options',
          buttons: [
            {
              text: 'Delete',
              handler: () => {
                console.log('delete clicked');
                this.coisirService.deletePost(post)
              }
            },
            {
              text: 'Edit',
              handler: () => {
                let prompt = this.alertCtrl.create({
                  title: 'Edit Post',
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
                        this.coisirService.updatePost({
                          _id: post._id,
                          _rev: post._rev,
                          title: data.title,
                          uParam: this.uParam
                        });
                      }
                    }
                  ]
                });
             
                prompt.present();
              }
            }
          ]
      });

      actionSheet.present();
    }


     presentError(errorMessage: string) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: errorMessage,
        buttons: ['Dismiss']
      });
      alert.present();
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

      deletePost(post){
        this.coisirService.deletePost(post)
      }
    }
