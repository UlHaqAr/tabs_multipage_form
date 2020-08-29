import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomepageService } from 'src/app/event-portal/services/homepage.service';
import { OrganiserInfo, HomePageCardData } from 'src/app/event-portal/models/homepage-card-data.model';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { HomePageApiDataModel } from 'src/app/shared/models/homepage-api-data.model';
import { EventCardModel } from 'src/app/shared/models/event-indiv-card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-portal-home',
  templateUrl: './event-portal-home.component.html',
  styleUrls: ['./event-portal-home.component.css']
})
export class EventPortalHomeComponent implements OnInit {
  // homepageCardData: HomePageCardData[];
  ongoingCardsList:EventCardModel[]; 
  upcomingCardsList:EventCardModel[]; 
  pastCardsList:EventCardModel[]; 
  loggeduser;
  
  constructor(private router: Router, private hmPgSrv: HomepageService, private userSrv: UserDataService) { }

  ngOnInit() {
    // this.epSrv.getEventCards().subscribe((data:HomePageCardData[]) => {
    //   this.homepageCardData = data;
    // });
    this.hmPgSrv.getEventCards2().subscribe((data:HomePageApiDataModel)=>{
      this.ongoingCardsList = data.ongoing;
      this.upcomingCardsList = data.upcoming;
      this.pastCardsList = data.past;
    });
    this.loggeduser = this.userSrv.loggedInUser;
  }

  onPosterCreate(){
    // this.router.navigateByUrl('/a2');
    this.router.navigateByUrl('/a3');
  }

  onGuessLogoCreate()
  {
    this.router.navigateByUrl('/a4');
  }

  

}
