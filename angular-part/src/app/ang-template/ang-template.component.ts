import { Component, Input, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { AWGallery } from '../gallery/gallery';


@Component({
  selector: 'app-ang-template',
  templateUrl: './ang-template.component.html',
  styleUrls: ['./ang-template.component.css']
})
export class AngTemplateComponent implements OnInit {
  @Input() gallery: AWGallery
   
  constructor() { }

  ngOnInit() {
  }

}
