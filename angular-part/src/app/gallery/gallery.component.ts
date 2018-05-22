import { Component, OnInit } from '@angular/core';
import { AWGallery } from '../gallery/gallery';
import { GALLERIES } from '../mock-gallery'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
   
  selectedGallery: AWGallery;
  galleries = GALLERIES;

  constructor() { }

  ngOnInit() {
  }
   
   onSelect(gal: AWGallery): void {
      this.selectedGallery = gal;
   }

}
