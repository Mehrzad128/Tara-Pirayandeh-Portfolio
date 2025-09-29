import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { AsyncPipe } from '@angular/common';

export interface image {
  id: number;
  source: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  galleryImages: image[] = [
    { id: 1, source: './../../../assets/images/TaraPirayandeh.galleryImage1.avif' },
    { id: 2, source: './../../../assets/images/TaraPirayandeh.galleryImage8.avif' },
    { id: 3, source: './../../../assets/images/TaraPirayandeh.galleryImage3.avif' },
    {
      id: 4,
      source: './../../../assets/images/TaraPirayandeh.galleryImage4.avif',
    },
    { id: 5, source: './../../../assets/images/TaraPirayandeh.galleryImage5.avif' },
    {
      id: 6,
      source: './../../../assets/images/TaraPirayandeh.galleryImage6VOA.avif',
    },
    { id: 7, source: './../../../assets/images/TaraPirayandeh.galleryImage7.avif' },
    { id: 8, source: './../../../assets/images/TaraPirayandeh.galleryImage2.avif' },
  ];

  sotoon1 = this.galleryImages.filter((m) => m.id < 3);
  sotoon2 = this.galleryImages.filter((m) => m.id > 2 && m.id < 5);
  sotoon3 = this.galleryImages.filter((m) => m.id > 4 && m.id < 7);
  sotoon4 = this.galleryImages.filter((m) => m.id > 6 && m.id < 9);

  handsetSotoon1 = this.galleryImages.filter((m) => m.id < 5);
  handsetSotoon2 = this.galleryImages.filter((m) => m.id > 4);
}
