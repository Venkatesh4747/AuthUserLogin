import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: any;
  result: any;

  constructor(private fb:FormBuilder,private api:ServiceService,private route:Router) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
email:['',Validators.required],
password:['',Validators.required]

    })
  }

  ProceedLogin(){
    if(this.registerForm.valid){
this.api.proceedLogin(this.registerForm.value).subscribe((a:any)=>{
if(a!=null){
this.result=a;
console.log('result',this.result);
localStorage.setItem('token',this.result.token)
this.route.navigate(['home'])
}
})
    }
  }

}
