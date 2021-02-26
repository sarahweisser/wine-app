import { Component } from '@angular/core';
import { WineService } from '../../services/wine.service';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  wines$ = this.wineService.wines$;
  users$ = this.userService.users$
    .pipe(
      catchError(err => {
        console.log(err);
        return EMPTY;
      })
    );

  constructor (
    private wineService: WineService,
    private dataService: DataService,
    private userService: UserService,
    private router: Router
    ) { }

  selectedUser$ = this.userService.selectedUser$;

  onSelected(id: number): void {
    let userRegUrl = `/logged-in-home/admin/user/${id}`;
    this.userService.selectedUserChanged(+id);
    
    this.router.navigate([userRegUrl]);
  }
}
