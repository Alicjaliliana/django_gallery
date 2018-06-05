import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GALLERIES } from './mock-gallery';
import { AWGallery } from './gallery/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
   getGalleries(): Observable<AWGallery[]> {
      return of(GALLERIES);
   }

  constructor() { }
   
  getGallery(id: number): Observable<AWGallery> {
     return of (GALLERIES.find(gallery => gallery.id => id ));
      
   }
}
