import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-temp-gallery-vertical',
  templateUrl: './temp-gallery-vertical.component.html',
  styleUrls: ['./temp-gallery-vertical.component.scss']
})
export class TempGalleryVerticalComponent implements OnInit {
   activePicture: string;
   @Input()
   gallery: object;
   initialised = false;
      
   activatePicture(thumb: string): void {
      this.activePicture = thumb;
      console.log(thumb)
   }


  constructor(private route: ActivatedRoute,
      private galleryService: GalleryService,
      private location: Location,
      private httpService: HttpClient) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
      this.galleryService.getGallery(id).
         subscribe(gallery => { 
                   this.gallery = gallery; 
                   if (!this.initialised && this.gallery !== undefined){
                     
                     this.activePicture = this.gallery.pictures[0].src;
                     this.initialised = true;
                     }
                   }
);
  }

}
