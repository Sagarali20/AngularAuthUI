import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

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
    
      username:['',Validators.required],
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
    }
    else{

      this.ValidateAllFromField(this.loginForm);

    }

  }

  private ValidateAllFromField(formgroup:FormGroup)
  {

    Object.keys(formgroup.controls).forEach(field =>{

      const controls=formgroup.get(field);

      if(controls instanceof FormControl)
      {
         controls.markAsDirty({onlySelf:true});
      }
      else if(controls instanceof FormGroup){
             
        this.ValidateAllFromField(controls);
      }
    })

  }

}
