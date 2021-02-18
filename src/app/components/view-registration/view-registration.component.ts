import { Component, OnInit } from '@angular/core';
import { WineService } from '../../services/wine.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public wineReg;

  constructor(private wineService: WineService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
      this.getWineReg(this.route.snapshot.params.id);
  }

  getWineReg(id:number) {
    this.wineService.getWine(id).subscribe(
      data => { this.wineReg = data; },
      err => console.error(err),
      () => console.log('wines are loaded')
    );
  }

  deleteWine(id: number) {
    this.wineService.deleteWine(id).subscribe(
      data => { this.router.navigate( ['/logged-in-home/admin'] ); },
      err => console.error(err),
      () => console.log('wine is deleted')
   );
  }
}
