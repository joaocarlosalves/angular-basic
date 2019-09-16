import { Component, OnInit, Input } from '@angular/core';
import { AuthService }  from './../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() usuario: any;
  @Input() senha: any;

  constructor(
    private auth: AuthService
  ) { }

  login() {
    this.auth.doLogin(this.usuario, this.senha);
  }

  ngOnInit() {
  }

}
