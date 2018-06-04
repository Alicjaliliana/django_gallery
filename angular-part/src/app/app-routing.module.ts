import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GalleryListComponent } from './gallery-list/gallery-list.component';


const routes: Routes =[
   {path: 'gallery', component: GalleryListComponent }
];

@NgModule({
   exports: [ RouterModule ],
   imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
