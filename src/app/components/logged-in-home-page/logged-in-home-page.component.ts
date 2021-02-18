import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logged-in-home-page',
  templateUrl: './logged-in-home-page.component.html',
  styleUrls: ['./logged-in-home-page.component.css']
})
export class LoggedInHomePageComponent implements OnInit {

  constructor(private router: Router) { }

  loggedInHome = true;
  wineJournal = false;
  admin = false;

  ngOnInit(): void {
  }

  logOut() {
    this.router.navigate(['/']);
  }

}
