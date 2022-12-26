import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.page.html',
  styleUrls: ['./createuser.page.scss'],
})
export class CreateuserPage implements OnInit {

  constructor(private http:HttpClient , private nav:NavController) { }

  ngOnInit() {
  }

  setuser:String;
  setpassword:String;
  checkpassword:String;
  lists:any = [];

  create(){
    
    console.log(this.setuser +"  "+ this.setpassword+"  " + this.checkpassword);
    if(this.setuser && this.setpassword && this.checkpassword != null){
      console.log("都有輸入");
      //
      var list ={
        "user" : this.setuser,
        "password" : this.setpassword
      };
      
      console.log(list);
      this.http.post("/login/add",list)
      .subscribe(data=>{
        this.lists = data;
        console.log(this.lists);
      })
      this.nav.navigateRoot("/home");
    }else{
      console.log("有沒填欄位");
    }
  }
  out(){
    this.nav.navigateRoot("/home");
  }
}
