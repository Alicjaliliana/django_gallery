import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { AngTemplateComponent } from './ang-template/ang-template.component';
import { TempDetailsComponent } from './temp-details/temp-details.component';
import { TempGalleryVerticalComponent } from './temp-gallery-vertical/temp-gallery-vertical.component';


const routes: Routes =[
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'gallery-list', component: AngTemplateComponent},
   {path: 'home', component: GalleryListComponent},
   {path: 'gallery/:id', component: TempDetailsComponent},
   {path: 'aw-gallery/:id', component: TempGalleryVerticalComponent}
];

@NgModule({
   exports: [ RouterModule ],
   imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
