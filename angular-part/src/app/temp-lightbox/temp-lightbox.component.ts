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
   images: object;
   
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
      this.loadImages();
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
   
   loadImages():void {
      this.images = document.getElementsByClassName("loading");
      console.log(this.images);
   }
   
    zoomIn(event){
      const element = (<HTMLImageElement>document.getElementById("zoom-container"));
      const img = (<HTMLImageElement>document.getElementById("activePic"));
      const posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
      const posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
      element.style.display = "block";
      element.style.backgroundImage = "url("+img.src+")";
      element.style.backgroundSize = (img.width * 2) + "px " + (img.height * 2) + "px";
      element.style.backgroundPosition = (-posX * 2.25) + "px " + (-posY * 2.25) + "px";
      element.style.left = (event.pageX + 5) + "px";
      element.style.top = (event.pageY + 5) +  "px";
      img.style.cursor = "none";
   }
   
   zoomOut(){
      const element = document.getElementById("zoom-container");
      const img = document.getElementById("activePic");
      element.style.display = "none";
      img.style.cursor = "auto";
   }
}
