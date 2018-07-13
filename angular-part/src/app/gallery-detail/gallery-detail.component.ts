import { Component, Input, OnInit } from '@angular/core';
import { AWGallery } from '../gallery/gallery';
import { Picture } from '../picture';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})

export class GalleryDetailComponent implements OnInit {
   activePicture: string;
   @Input()
   gallery: object;
   initialised = false;

  constructor(
      private route: ActivatedRoute,
      private galleryService: GalleryService,
      private location: Location,
      private httpService: HttpClient
   ) { }

  ngOnInit(): void {
     const id = this.route.snapshot.params.id
      this.galleryService.getGallery(id).
         subscribe(gallery => { 
                   this.gallery = gallery; 
                   if (!this.initialised && this.gallery !== undefined){
                     this.activePicture = this.gallery.pictures[0].src;
                     this.initialised = true;
                     }
                   })
  }
   
   activatePicture(thumb: string): void {
      this.activePicture = thumb;
      console.log(thumb)
	
   }

}
