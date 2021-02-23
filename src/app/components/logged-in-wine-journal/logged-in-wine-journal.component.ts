import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WineService } from '../../services/wine.service';


@Component({
  selector: 'app-logged-in-wine-journal',
  templateUrl: './logged-in-wine-journal.component.html',
  styleUrls: ['./logged-in-wine-journal.component.css']
})
export class LoggedInWineJournalComponent {

  constructor(private wineService: WineService, private router: Router) { }

  showWineTable = false;

  wines$ = this.wineService.wines$;

  submitWine() {
    this.router.navigate( ['/wine-form'] );
  }

  showWines() {
    this.showWineTable = true;
  }

  hideWines() {
    this.showWineTable = false;
  }

}
