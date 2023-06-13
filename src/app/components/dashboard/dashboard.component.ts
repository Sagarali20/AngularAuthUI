import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  public Users:any=[];

  public fullname:string="";
  public role:string="";

  constructor(private api:APIService ,private router:Router,private auth:AuthService,private userstore:UserStoreService){}

  ngOnInit(): void {

       this.api.getUser().subscribe(res =>{
        console.log(res);
        this.Users=res.users;
       });

       this.userstore.getFullNameFromStore().subscribe(val =>{

          let fullnameFromToken = this.auth.getfullnameFromtoken();
          this.fullname=val || fullnameFromToken;
       
       })

       this.userstore.getRoleFromStore().subscribe(val =>{
      
        let userrole=this.auth.getroleFromToken();
        this.role=val || userrole;
         
        console.log("rolestart");
        console.log(val);
        console.log(userrole);

       })

       console.log(this.Users);
 
  }

  Logout()
  { 
    this.auth.signOut();
    this.router.navigate(['login']);  
  
  }
}
