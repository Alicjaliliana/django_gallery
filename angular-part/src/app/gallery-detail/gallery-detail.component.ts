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
   activePicture: any;
   @Input()
   gallery: any;
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

   zoomIn(event){
      const element = document.getElementById("zoom-container");
      const img = document.getElementById("activePic");
      const posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
      const posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
      element.style.display = "block";
      element.style.backgroundImage = "url("+img.src+")";
      element.style.backgroundSize = (img.width * 3.5) + "px " + (img.height * 3.5) + "px";
      element.style.backgroundPosition = (-posX * 4) + "px " + (-posY * 4) + "px";
      element.style.left = (event.pageX +5) + "px";
      element.style.top = (event.pageY +5) +"px";
      img.style.cursor = "none";
      console.log(img.width img.height)
   }
   
   zoomOut(){
      const element = document.getElementById("zoom-container");
      const img = document.getElementById("activePic");
      element.style.display = "none";
      img.style.cursor = "auto";
   }


}
