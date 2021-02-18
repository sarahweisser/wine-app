import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from '../../services/wine.service';
import { Observable } from 'rxjs';
import { WineRegistration } from 'src/app/models/wine-registration';



@Component({
  selector: 'app-logged-in-wine-journal',
  templateUrl: './logged-in-wine-journal.component.html',
  styleUrls: ['./logged-in-wine-journal.component.css']
})
export class LoggedInWineJournalComponent implements OnInit {

  constructor(private wineService: WineService, private router: Router) { }

  showWineTable = false;

  public wines;

  ngOnInit(): void {
    this.getWines();
  }

  submitWine() {
    this.router.navigate( ['/wine-form'] );
  }

  showWines() {
    this.showWineTable = true;
  }

  hideWines() {
    this.showWineTable = false;
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
