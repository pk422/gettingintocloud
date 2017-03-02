import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: LoginService,
    private alertService: AlertService) { }

  ngOnInit() {
    console.log('new post component called...');
    // reset login status
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/newpost']);
    }else {
      this.router.navigate(['/login']);
    }
  }

}
