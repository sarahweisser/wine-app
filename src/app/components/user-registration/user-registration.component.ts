import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userReg;
  userFullName: string;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getUserReg(this.route.snapshot.params.id);
  }

  getUserReg(id: number) {
    this.userService.getUser(id).subscribe(
      data => {
        this.userReg = data;
        this.userFullName = this.assembleUserFullName();
      },
      err => console.error(err),
      () => console.log('user is loaded')
    );
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      data => { this.router.navigate(['/logged-in-home/admin']); },
      err => console.error(err),
      () => console.log('user is deleted')
    );
  }

   assembleUserFullName() {
    return this.userFullName = this.userReg.firstName + " " + this.userReg.lastName;
   }

}

