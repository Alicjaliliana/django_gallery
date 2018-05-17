import { Component, Input, OnInit } from '@angular/core';
import { AWGallery } from '../gallery/gallery';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss']
})
export class GalleryDetailComponent implements OnInit {
   @Input() gallery: AWGallery;

  constructor() { }

  ngOnInit() {
  }

}
