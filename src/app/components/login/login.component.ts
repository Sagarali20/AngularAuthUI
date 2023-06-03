import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validationform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  type :string ="password";
  istext :boolean=false;
  eyeicon:string="fa-eye-slash" 
  loginForm!: FormGroup;
 constructor( private fb:FormBuilder)
 {


 }

  ngOnInit(): void {

    this.loginForm=this.fb.group({  
    
      username:['',[Validators.required,Validators.minLength(10)]],
      password :['',Validators.required]
    })
  }

  hideShowPass()
  {
    this.istext=!this.istext;
    this.istext ? this.eyeicon='fa-eye':this.eyeicon='fa-eye-slash';
    this.istext ? this.type='text':this.type='password';
  }

  onsubmit()
  {

    if(this.loginForm.valid)
    {
       //database

       console.log(this.loginForm.value)
    }
    else{

      validateForm.ValidateAllFromField(this.loginForm);

    }

  }



}
