import { Component, Input, OnInit } from '@angular/core';
import { AWGallery } from '../gallery/gallery';
import { Picture } from '../picture';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {
   activePicture: Picture;
   @Input() gallery: AWGallery;

  constructor(
      private route: ActivatedRoute,
      private galleryService: GalleryService,
      private location: Location
   ) { }

  ngOnInit(): void {
     this.getGallery();
  }
   
   getGallery(): void {
      const id = +this.route.snapshot.paramMap.get('id')
      this.galleryService.getGallery(id).
         subscribe(gallery => this.gallery = gallery)
   }
   
   activatePicture(thumb: Picture): void {
      this.activePicture = thumb;
   }

}
