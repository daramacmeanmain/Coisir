import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { Coisir } from '../../providers/coisir';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(private alertCtrl: AlertController, public nav: NavController, public http: Http, public coisirService: Coisir, public loadingCtrl: LoadingController) {
  }

  presentError(errorMessage: string) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: errorMessage,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  login(){
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      let credentials = {
        username: this.username,
        password: this.password
      };

      this.http.post('http://localhost:3000/auth/login', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          let result = res.json();
          let uPush = result["user_id"];
          console.log(res.json())
          console.log(result["user_id"]);
          this.coisirService.init(res.json());
          this.nav.setRoot(HomePage, {username: this.username});
          this.presentLoading();
        }, (err) => {
          let jsonMessage = JSON.parse(err._body)
          console.log(err);
          this.presentError(jsonMessage.message);
        });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Logging In",
      duration: 2000
    });
    loader.present();
  }

  launchSignup(){
    this.nav.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
