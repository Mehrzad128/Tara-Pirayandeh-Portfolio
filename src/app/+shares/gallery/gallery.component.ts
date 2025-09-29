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
    { id: 1, source: 'TaraPirayandeh.galleryImage1' },
    { id: 2, source: 'TaraPirayandeh.galleryImage8' },
    { id: 3, source: 'TaraPirayandeh.galleryImage3' },
    {
      id: 4,
      source: 'TaraPirayandeh.galleryImage4',
    },
    { id: 5, source: 'TaraPirayandeh.galleryImage5' },
    {
      id: 6,
      source: 'TaraPirayandeh.galleryImage6VOA',
    },
    { id: 7, source: 'TaraPirayandeh.galleryImage7' },
    { id: 8, source: 'TaraPirayandeh.galleryImage2' },
  ];

  sotoon1 = this.galleryImages.filter((m) => m.id < 3);
  sotoon2 = this.galleryImages.filter((m) => m.id > 2 && m.id < 5);
  sotoon3 = this.galleryImages.filter((m) => m.id > 4 && m.id < 7);
  sotoon4 = this.galleryImages.filter((m) => m.id > 6 && m.id < 9);

  handsetSotoon1 = this.galleryImages.filter((m) => m.id < 5);
  handsetSotoon2 = this.galleryImages.filter((m) => m.id > 4);
}
