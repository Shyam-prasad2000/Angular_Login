import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm=this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z .]*')]],
    userid:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9!@#$%^&*()_+-<>,./?\]*')]]
  })


  constructor(private router:Router,private fb:FormBuilder) { }


  ngOnInit(): void {
  }
  register(){
    alert("successfully registerd")
    console.log();
    
  }

}
