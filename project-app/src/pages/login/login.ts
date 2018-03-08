import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { Coisir } from '../../providers/coisir';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public nav: NavController, public http: Http, public coisirService: Coisir) {
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
          this.coisirService.init(res.json());
          this.nav.setRoot(HomePage);
        }, (err) => {
          console.log(err);
        });
  }

  launchSignup(){
    this.nav.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
