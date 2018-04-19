import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Coisir } from '../../providers/coisir';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

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

  register(){
    let headers = new Headers();
      headers.append('Content-Type', 'application/json');
 
      let users = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      };

      this.http.post('http://localhost:3000/auth/register', JSON.stringify(users), {headers: headers})
        .subscribe(res => {
          let result = res.json();
          console.log(res.json());
          console.log(result["user_id"]);
          this.coisirService.init(res.json());
          this.nav.setRoot(HomePage, {username: this.username});
          this.presentLoading();
        }, (err) => {
          let jsonMessage = JSON.parse(err._body)
          console.log(err);
          this.presentError(jsonMessage.error);
        });
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Creating Account",
      duration: 2000
    });
    loader.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

}
