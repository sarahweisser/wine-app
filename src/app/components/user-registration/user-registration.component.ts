import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

import { EMPTY, Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserRegistrationComponent {

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  userReg$ = this.userService.selectedUser$
    .pipe(
      catchError(err => {
        // TODO create appropriate error handling
        console.log(err);
        return EMPTY;
      })
    );

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      data => { this.router.navigate(['/logged-in-home/admin']); },
      err => console.error(err),
      () => console.log('user is deleted')
    );
  }
}

