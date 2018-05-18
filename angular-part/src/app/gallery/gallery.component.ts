import { Component, OnInit } from '@angular/core';
import { GALLERIES } from '../mock-gallery'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  galleries = GALLERIES;

  constructor() { }

  ngOnInit() {
  }

}
