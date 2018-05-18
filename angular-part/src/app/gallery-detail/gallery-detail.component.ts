import { Component, Input, OnInit } from '@angular/core';
import { AWGallery } from '../gallery/gallery';
import { Picture } from '../picture';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {
   activePicture: Picture;
   @Input() gallery: AWGallery;

  constructor() { }

  ngOnInit() {
  }
   
   activatePicture(thumb: Picture): void {
      this.activePicture = thumb;
      console.log(this.activePicture.picture);
   }

}
