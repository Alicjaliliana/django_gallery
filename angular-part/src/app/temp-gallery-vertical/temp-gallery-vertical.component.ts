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
   gallery: any;
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
