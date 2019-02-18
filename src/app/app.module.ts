import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchDisclaimerComponent } from './search-disclaimer/search-disclaimer.component';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';
import { ParcelShipperComponent } from './parcel-shipper/parcel-shipper.component';
import { ParcelHistoryComponent } from './parcel-history/parcel-history.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    DashboardComponent,
    SearchComponent,
    PageNotFoundComponent,
    SearchDisclaimerComponent,
    ParcelDetailsComponent,
    ParcelShipperComponent,
    ParcelHistoryComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
