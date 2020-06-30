import { ToastrService } from './common/toastr.service';
import { NavBarComponent } from './../nav/navbar.component';
import { EventListComponent } from './events/events-list-component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

import {EventService} from './events/shared/event.service'

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService,ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
