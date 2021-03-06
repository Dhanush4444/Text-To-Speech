import {Component, OnInit} from '@angular/core';
import {ApiServeService} from '../api-serve.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

interface LoginData {
  login: boolean;
  uuid: string;
}

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private service: ApiServeService, private cookieS: CookieService, private route: Router) {
  }

  ngOnInit() {
    if (this.cookieS.get('uuid')) {
      this.route.navigate(['home']);
    }
  }

  loginEvent(email: string, password: string) {
    this.service.loginAction(email, password).subscribe((e: LoginData) => {
      if (e.login) {
        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 1);
        this.cookieS.set('uuid', e.uuid, expiryDate);
        // console.log('Cookie set');
        this.route.navigate(['home']);
      } else {
        document.cookie = `uuid = ''`;
      }
    });
  }
}
