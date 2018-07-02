import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';


const routes: Routes =[
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'gallery-list', component: GalleryComponent},
   {path: 'home', component: GalleryListComponent},
   {path: 'gallery/:id', component: GalleryDetailComponent}
];

@NgModule({
   exports: [ RouterModule ],
   imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
