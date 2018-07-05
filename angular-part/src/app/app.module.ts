import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { AngTemplateComponent } from './ang-template/ang-template.component';
import { TempLightboxComponent } from './temp-lightbox/temp-lightbox.component';
import { TempGalleryVerticalComponent } from './temp-gallery-vertical/temp-gallery-vertical.component';
import { TempVerticalComponent } from './temp-vertical/temp-vertical.component';
import { TempDetailsComponent } from './temp-details/temp-details.component';


@NgModule({
   declarations: [
      AppComponent,
      GalleryComponent,
      GalleryListComponent,
      GalleryDetailComponent,
      AngTemplateComponent,
      TempLightboxComponent,
      TempGalleryVerticalComponent,
      TempVerticalComponent,
      TempDetailsComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
