import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { empty } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    name: string;
    pwd: string;
    constructor(public router: Router) {}

    ngOnInit() {
        if(this.router.url == '/login' && localStorage.getItem('isLoggedin')){
            this.router.navigate(['/dashboard']);
        };
    }

    onLoggedin(name:string, pwd:string) {
        this.name = name;
        this.pwd = pwd;
        if(this.name == '' || this.pwd == ''){
            alert('Please Enter your credentials');
            this.router.navigate(['/login']);
        }

        localStorage.setItem('username', this.name);
        localStorage.setItem('isLoggedin', 'true');
    }
}
