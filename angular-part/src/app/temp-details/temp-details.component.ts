import { Component, OnInit } from '@angular/core';
import { GalleryService } from "../gallery.service";

@Component({
  selector: 'app-temp-details',
  templateUrl: './temp-details.component.html',
  styleUrls: ['./temp-details.component.scss']
})
export class TempDetailsComponent implements OnInit {
template: object;
   
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
     this.galleryService.getTemplate().
         subscribe(template => this.template = template)
  }
}
