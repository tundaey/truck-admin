import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from '../services/auth.service';
import {User} from '../models/User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = new User()
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    
    this.auth.login(this.user)
    .then((user)=> {
      console.log(user)
      this.router.navigateByUrl('/app')
    })
  }

}
