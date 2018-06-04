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
}
