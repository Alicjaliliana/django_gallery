import { Component, OnInit } from '@angular/core';
import { AWGallery } from '../gallery/gallery';
import { GALLERIES } from '../mock-gallery';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
   

  galleries: AWGallery[];

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
     this.getGalleries();
  }
   
   
   
   getGalleries(): void {
      this.galleryService.getGalleries()
         .subscribe(galleries => this.galleries = galleries);
   }

}
