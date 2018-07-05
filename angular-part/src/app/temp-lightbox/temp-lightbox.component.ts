import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-temp-lightbox',
  templateUrl: './temp-lightbox.component.html',
  styleUrls: ['./temp-lightbox.component.scss']
})
export class TempLightboxComponent implements OnInit {
   gallery: object;
   galleries: object;
   activePicture: string;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
     this.getGalleries()
  }
   
   activatePicture(thumb: string): void {
      this.activePicture = thumb;
   }
   
   getGalleries(): void {
      this.galleryService.getGalleries().
      subscribe(galleries => this.galleries = galleries)
   }
   
   openGallery(gal): void {
      document.getElementById('opened-gallery').style.display = "block";
      this.activatePicture(gal.pictures[0].src);
      this.gallery = gal;
      console.log(this.gallery)
   }
   
   closeGallery(): void {
      document.getElementById('opened-gallery').style.display = "none";
   }
}
