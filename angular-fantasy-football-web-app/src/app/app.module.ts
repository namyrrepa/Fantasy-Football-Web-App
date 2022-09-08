import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolsComponent } from './tools/tools.component';
import { NflTeamsComponent } from './nfl-teams/nfl-teams.component';
import { NflDetailsComponent } from './nfl-details/nfl-details.component';
import { SffflComponent } from './sfffl/sfffl.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent,
    NflTeamsComponent,
    NflDetailsComponent,
    SffflComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
