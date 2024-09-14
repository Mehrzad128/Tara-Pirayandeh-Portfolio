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
    {id: 1, source: './../../../assets/TaraPirayandeh.galleryImage1.jpg'},
    {id: 2, source: './../../../assets/TaraPirayandeh.galleryImage8.JPG'},
    {id: 3, source: './../../../assets/TaraPirayandeh.galleryImage3.jpg'},
    {id: 4, source: './../../../assets/TaraPirayandeh.galleryImage4 (VOA).jpg'},
    {id: 5, source: './../../../assets/TaraPirayandeh.galleryImage5.jpg'},
    {id: 6, source: './../../../assets/TaraPirayandeh.galleryImage6 (VOA).jpg'},
    {id: 7, source: './../../../assets/TaraPirayandeh.galleryImage7.jpg'},
    {id: 8, source: './../../../assets/TaraPirayandeh.galleryImage2.jpg'},
  ];

  sotoon1 = this.galleryImages.filter(m=> m.id < 3);
  sotoon2 = this.galleryImages.filter(m=> m.id > 2 && m.id <5);
  sotoon3 = this.galleryImages.filter(m=> m.id > 4 && m.id <7);
  sotoon4 = this.galleryImages.filter(m=> m.id > 6 && m.id <9);

  handsetSotoon1 = this.galleryImages.filter(m=> m.id <5)
  handsetSotoon2 = this.galleryImages.filter(m=> m.id >4)

}
