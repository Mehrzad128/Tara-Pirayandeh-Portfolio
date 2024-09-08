import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MusicPlayerComponent } from "../../+shares/music-player/music-player.component";
import { MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule} from '@angular/material/grid-list';
import { GalleryComponent } from "../../+shares/gallery/gallery.component";
import { VideosComponent } from "../../+shares/videos/videos.component";
import {MatDividerModule} from '@angular/material/divider';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe,
    RouterOutlet,
    MusicPlayerComponent,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    GalleryComponent,
    VideosComponent,
    MatDividerModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
    readonly panelOpenState = signal(false);

    tiles: Tile[] = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];
}
