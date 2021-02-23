import { Component, OnInit } from '@angular/core';
import { WineService } from '../../services/wine.service';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public wines;

  users$ = this.userService.users$;

  constructor (
    private wineService: WineService,
    private dataService: DataService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.getWines();
  }

  getWines() {
    this.wineService.getWines().subscribe(
      data => {
        this.wines = data;
      },
      err => console.log(err),
      () => console.log('wines loaded')
    );
  }

}
