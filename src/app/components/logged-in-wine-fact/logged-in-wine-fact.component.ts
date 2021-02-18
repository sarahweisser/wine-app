import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-logged-in-wine-fact',
  templateUrl: './logged-in-wine-fact.component.html',
  styleUrls: ['./logged-in-wine-fact.component.css']
})
export class LoggedInWineFactComponent implements OnInit {

  // TODO create logic to display random fact/term on launch
  wineFacts: string[];
  wineFact: string;
  wineTerminology: string[];
  wineTerm: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.wineFacts = this.dataService.getWineFacts();
    this.wineFact = this.wineFacts[0];
    this.wineTerminology = this.dataService.getWineTerminology();
    this.wineTerm = this.wineTerminology[0];
  }

}
