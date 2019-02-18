import { Component, OnInit } from '@angular/core';
import { AerobaseProfile } from 'keycloak-js';
import { AerobaseService } from 'aerobase-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userDetails: AerobaseProfile;

  constructor(private aerobaseService: AerobaseService) {}

  async ngOnInit() {
    if (await this.aerobaseService.isLoggedIn()) {
      this.userDetails = await this.aerobaseService.loadUserProfile();
    }
  }

  async doLogout() {
    await this.aerobaseService.logout();
  }
}
