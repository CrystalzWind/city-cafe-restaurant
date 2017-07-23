import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './1.header/header.component';

import {AppRoutingModule} from './app-routing.module';
import {HomePageComponent} from './2.home-page/hp.component';
import { AboutComponent } from './3.about/about.component';
import { ServicesComponent } from './4.services/services.component';
import { MenuCardComponent } from './5.memu-card/memu-card.component';
import { GalleryComponent } from './6.gallery/gallery.component';
import { StatsComponent } from './7.stats/stats.component';
import { ShefsComponent } from './8.shefs/shefs.component';
import { CustomerFeedbackComponent } from './9.customer-feedback/customer-feedback.component';
import { ContactUsComponent } from './10.contact-us/contact-us.component';
import { FooterComponent } from './11.footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AboutComponent,
    ServicesComponent,
    MenuCardComponent,
    GalleryComponent,
    StatsComponent,
    ShefsComponent,
    CustomerFeedbackComponent,
    ContactUsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
