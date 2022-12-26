import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http:HttpClient, 
    public nav:NavController ) {}

  getuser: String;
  getpassword: String;
  
 
  logins: any = [];

  login(){
    if(this.getuser && this.getpassword ==null){
      console.log("請輸入帳號密碼");
    }else{
      //https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/
      //cors教學
      this.http.get("/login/find")
        .subscribe(data=>{
          
          this.logins = data;

            for(var i = 0;i<this.logins.length;i++){
              console.log(this.logins[i]);
              console.log(this.logins[i].user)
              console.log(this.logins[i].password)
              if(this.getuser == this.logins[i].user && this.getpassword == this.logins[i].password){
                console.log("相同");
                console.log("換頁");
                this.nav.navigateRoot("/index");
                break;
              }else{
                console.log("不相同");
               // this.getuser = this.getpassword = '';
              }
            }
         })
    }
 
  }

  createuser(){
    this.nav.navigateRoot("/createuser");
  }


}
