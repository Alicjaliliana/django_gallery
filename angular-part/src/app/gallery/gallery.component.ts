import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AWGallery } from '../gallery/gallery';
import { GALLERIES } from '../mock-gallery';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  id: number;
  appearance: string
  galleries: object;
  galleryData: string [];
  template: object;


  constructor(private galleryService: GalleryService, private httpService: HttpClient) { }
   

  ngOnInit() {
     this.getTemplate();
     this.getGalleries();
  }
   
  getGalleries(): void {
     this.galleryService.getGalleries()
        .subscribe(galleries => this.galleries = galleries);
  }
   
   getTemplate(): void {
     this.galleryService.getTemplate()
        .subscribe(template => this.template = template);
  }
   

}
