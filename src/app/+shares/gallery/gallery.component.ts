import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { AsyncPipe } from '@angular/common';

export interface image {
  id: number;
  source: string;
  title: string;
  subTitile: string;
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
    {id: 1, source: './../../../assets/Tezza-8812.jpg', title: '', subTitile: ''},
    {id: 2, source: './../../../assets/Facetune_05-05-2024-01-43-59.jpg', title: '', subTitile: ''},
    {id: 3, source: './../../../assets/FullSizeRender.jpg',title: '',subTitile: ''},
    {id: 4, source: './../../../assets/IMG_3655 2.jpg', title: '', subTitile: ''},
    {id: 5, source: './../../../assets/IMG_0408.jpg', title: '', subTitile: ''},
    {id: 6, source: './../../../assets/Snapseed.jpg', title: '', subTitile: ''},
    {id: 7, source: './../../../assets/Facetune_05-05-2024-01-23-48_jpg.jpg', title: '', subTitile: ''},
    {id: 8, source: './../../../assets/IMG_3655 2.jpg', title: '', subTitile: ''},
  ];

  sotoon1 = this.galleryImages.filter(m=> m.id < 3);
  sotoon2 = this.galleryImages.filter(m=> m.id > 2 && m.id <5);
  sotoon3 = this.galleryImages.filter(m=> m.id > 4 && m.id <7);
  sotoon4 = this.galleryImages.filter(m=> m.id > 6 && m.id <9);

  handsetSotoon1 = this.galleryImages.filter(m=> m.id <5)
  handsetSotoon2 = this.galleryImages.filter(m=> m.id >4)

}
