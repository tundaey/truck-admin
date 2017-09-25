import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private BASE_URL: string = 'http://localhost:5000/api/v1/auth';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  private users = [
    {id: "1", email: "tundaey@gmail.com", role_id: 1, role_name: "SuperAdmin"},
    {id: "2", email: "admin@admin.com", role_id: 2, role_name: "Admin"},
  ]
  constructor(private http: Http) {}

  login(user): Promise<any> {
    //let url: string = `${this.BASE_URL}/login`;
    //return this.http.post(url, user, {headers: this.headers}).toPromise();
    return new Promise((resolve, reject)=> {
      let status: boolean;
      this.users.forEach(currentUser => {
        if(user.email === currentUser.email ) status = true;
        status = false
      })
      localStorage.setItem('token', '123456')
      resolve(true)
    })
  }

  checkAuth(token): Promise<any>{
    let url = `${this.BASE_URL}/authenticated`;
    let headers: Headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    })
    return this.http.get(url, {headers: headers}).toPromise()
  }



}
