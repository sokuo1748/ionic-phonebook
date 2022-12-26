import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  constructor(private http:HttpClient,
    public nav:NavController) { }

  customers: any = [];

  ngOnInit() {
    this.http.get("/customer/findAll")
    .subscribe(data =>{
      this.customers = data;
      console.log(this.customers);
    })
  }
  add(){
    this.nav.navigateRoot("/createcustomer");
  }
  out(){
    this.nav.navigateRoot("/home");
  }
  dele( customer ){
    console.log("dele",customer.id);
    this.http.delete("/customer/dele/"+customer.id)
    .subscribe(data=>{
      console.log("dele success!!!");
    })
    location.reload();
  }
}
