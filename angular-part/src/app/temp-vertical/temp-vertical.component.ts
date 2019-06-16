import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-temp-vertical',
  templateUrl: './temp-vertical.component.html',
  styleUrls: ['./temp-vertical.component.scss']
})
export class TempVerticalComponent implements OnInit {
  galleries: object;
  gallery: object;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
     this.getGalleries();
  }
   
   getGalleries(): void {
      this.loadGallery();
      this.galleryService.getGalleries().
         subscribe(galleries => this.galleries = galleries);
      this.loadGallery();
   }

   loadGallery():void {
      this.gallery = document.images;
      /*setTimeout(function() {
      this.gallery.classList.remove("loading");
   }, 3000); */
      console.log(this.gallery)
   }
      
   
}
