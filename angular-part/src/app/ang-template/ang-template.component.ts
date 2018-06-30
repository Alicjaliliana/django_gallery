import { Component, Input, OnInit } from '@angular/core';
import { Look } from '../appearance';
import { Appearance } from '../mock-gallery';
import { GalleryService } from '../gallery.service';
import { AWGallery } from '../gallery/gallery';


@Component({
  selector: 'app-ang-template',
  templateUrl: './ang-template.component.html',
  styleUrls: ['./ang-template.component.css']
})
export class AngTemplateComponent implements OnInit {
  appearanceList = Appearance
  appearance: string
  @Input() gallery: AWGallery
  @Input() look: Look
   
  constructor() { }

  ngOnInit() {
  }
  changeAppearance(appear: Look): void {
     this.appearance = appear.name.toString();
     console.log(this.appearance);
  }

}
