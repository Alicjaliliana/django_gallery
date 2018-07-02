import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GALLERIES } from './mock-gallery';
import { AWGallery } from './gallery/gallery';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
   galleryUrl = "http://localhost:8000/gallery/?format=json"
   
   getGalleries() {
      var tmp = this.http. get(this.galleryUrl);
      tmp.subscribe(res => console.log(res))
      return tmp;
   }

  constructor(private http: HttpClient) { }
   
   getGallery(id: number) {
     var GalleryWithID = this.http.get("http://localhost:8000/gallery/"+id+"?format=json")
     return GalleryWithID
   }
}
