import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'service/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9!@#$%^&*()_+-<>,./?\]*')]]
  })

  constructor(private router:Router,private fb:FormBuilder,private ds:DataServiceService) { }

  ngOnInit(): void {
  }
  login(){
    var userid=this.loginForm.value.userid
    var password=this.loginForm.value.password
    if(this.loginForm.valid){
      const result=this.ds.login(userid,password)
      if(result){
        alert("login successful")
        this.router.navigateByUrl("home")
    }
  }

}

}
