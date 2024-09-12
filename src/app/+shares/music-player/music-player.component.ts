import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { map, Observable, shareReplay } from 'rxjs';

export interface musicList {
  name: string;
  position: number;
  duration: string;
  src: string;
  cover:string;
}

const performances: musicList[] = [
  {position: 1, name: 'Azizam', duration: '5:29' , src:'./../../../assets/VID_20240323_121714_275.mp3' , cover:''},
  {position: 2, name: 'Leili Savanam'  , duration: '5:01', src:'./../../../assets/leili bavanam 2-20-24.mp3', cover:''},
  {position: 3, name: 'Gash Sabakh' , duration: '4:22', src:'./../../../assets/gash sabakh 2-19-24.mp3', cover:''},
  {position: 4, name: 'Fasle Gol' , duration: '5:00', src:'./../../../assets/Fasle Gol 2-17-24.mp3', cover:''},
  {position: 5, name: 'Hey Binam' , duration: '4:05', src:'./../../../assets/Hey binam 2-19-24.mp3', cover:''},
];

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIcon,
    MatFabButton,
    MatProgressBarModule,
    MatSliderModule,
    FormsModule,
    MatTableModule,
    AsyncPipe
  ],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent {

  displayedColumns: string[] = ['position', 'name', 'duration'];
  dataSource = performances;
  clickedRows = new Set<musicList>();
  selectedItem : musicList = {
    name : 'Azizam',
    position : 1,
    duration : '1:28',
    src:'./../../../assets/VID_20240323_121714_275.mp3',
    cover:'',
  }

  select(selected : musicList){
    this.selectedItem = {
      name : selected.name ,
      position : selected.position,
      duration : selected.duration,
      src : selected.src,
      cover: selected.cover,
    }
  }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map((result) => result.matches),
    shareReplay()
  );
  
}


