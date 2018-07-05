import { Component, Input, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

import { TempLightboxComponent } from '../temp-lightbox/temp-lightbox.component';


@Component({
  selector: 'app-ang-template',
  templateUrl: './ang-template.component.html',
  styleUrls: ['./ang-template.component.css']
})
export class AngTemplateComponent implements OnInit {
   template: object;
   
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
     this.galleryService.getTemplate().
         subscribe(template => {this.template = template;
                                console.log(template)})
  }

}
