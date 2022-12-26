import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.page.html',
  styleUrls: ['./createcustomer.page.scss'],
})
export class CreatecustomerPage implements OnInit {

  constructor(private http:HttpClient , private nav:NavController) { }

  ngOnInit() {
  }

  setname:String;
  setphone:String;

  create(){
    console.log(this.setname +"  "+ this.setphone);
    if(this.setname && this.setphone != null){
      var list ={
        "name" : this.setname,
        "phone" : this.setphone
      };
      this.http.post("/customer/add",list)
      .subscribe(data=>{
        console.log(data);
      })
      this.nav.navigateRoot("/index");
    }else{
      console.log("請輸入姓名與電話");
    }
  }
  out(){
    this.nav.navigateRoot("/index");
  }
}
