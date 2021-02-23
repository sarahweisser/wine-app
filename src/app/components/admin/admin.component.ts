import { Component } from '@angular/core';
import { WineService } from '../../services/wine.service';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  wines$ = this.wineService.wines$;
  users$ = this.userService.users$;

  constructor (
    private wineService: WineService,
    private dataService: DataService,
    private userService: UserService
    ) { }

}
