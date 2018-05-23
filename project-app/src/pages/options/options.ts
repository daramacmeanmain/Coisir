import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Coisir } from '../../providers/coisir';

/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  pParam: any;
  pId: any;
  post: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public coisirService: Coisir) {
  }

  ionViewDidLoad() {
    this.pParam = this.navParams.get('post_id');
    console.log(this.pParam);
  }

  delPost(post){
    post = this.pId;
    console.log(post)
    this.coisirService.deletePost(post)
  }

}
