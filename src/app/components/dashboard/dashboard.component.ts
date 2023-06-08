import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  public Users:any=[];

  constructor(private api:APIService ,private router:Router,private auth:AuthService){}

  ngOnInit(): void {

       this.api.getUser().subscribe(res =>{
        console.log(res.users);
        this.Users=res;
       });

  
  }

  Logout()
  { 
    this.auth.signOut();
    this.router.navigate(['login']);  
  
  }
}
