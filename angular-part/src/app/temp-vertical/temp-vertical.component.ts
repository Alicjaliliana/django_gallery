import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-temp-vertical',
  templateUrl: './temp-vertical.component.html',
  styleUrls: ['./temp-vertical.component.scss']
})
export class TempVerticalComponent implements OnInit {
  galleries: object;

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
     this.getGalleries();
  }
   
   getGalleries(): void {
      this.galleryService.getGalleries().
         subscribe(galleries => this.galleries = galleries)
   }

}
