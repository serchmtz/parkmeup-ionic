import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    User;

    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.authenticationService.getCurrentUser().then(user=> {
            this.User = user;
            this.User = this.User.name;
        });
    }

    logOut() {
        this.authenticationService.logOut().then(() => {
            return this.router.navigate(['public']);
        });
    }
}
