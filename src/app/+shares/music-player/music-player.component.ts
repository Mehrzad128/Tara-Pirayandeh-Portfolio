import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { map, Observable, shareReplay } from 'rxjs';

export interface musicList {
  name: string;
  role: string;
  position: number;
  duration: string;
  album: string;
  src: string;
  cover: string;
}

const musics: musicList[] = [
  {
    position: 1,
    name: 'Azizam',
    role: 'vocal',
    duration: '5:29',
    album: '',
    src: './../../../assets/songs/Azizam.mp3',
    cover: './../../../assets/images/VOA cover.jpg',
  },
  {
    position: 2,
    name: 'Leili Savanam',
    role: 'vocal',
    duration: '5:01',
    album: '',
    src: './../../../assets/songs/leili bavanam 2-20-24.mp3',
    cover: './../../../assets/images/VOA cover.jpg',
  },
  {
    position: 3,
    name: 'Gash Sabakh',
    role: 'vocal',
    duration: '4:22',
    album: '',
    src: './../../../assets/songs/gash sabakh 2-19-24.mp3',
    cover: './../../../assets/images/VOA cover.jpg',
  },
  {
    position: 4,
    name: 'Fasle Gol',
    role: 'vocal',
    duration: '5:00',
    album: '',
    src: './../../../assets/songs/Fasle Gol 2-17-24.mp3',
    cover: './../../../assets/images/VOA cover.jpg',
  },
  {
    position: 5,
    name: 'Hey Binam',
    role: 'vocal',
    duration: '4:05',
    album: '',
    src: './../../../assets/songs/Hey binam 2-19-24.mp3',
    cover: './../../../assets/images/VOA cover.jpg',
  },
  {
    position: 6,
    name: 'Cant help falling in love',
    role: 'vocal',
    duration: '2:55',
    album: '',
    src: './../../../assets/songs/Cant help falling in love.m4a',
    cover: '',
  },
  {
    position: 7,
    name: 'Indigo night',
    role: 'vocal',
    duration: '4:16',
    album: '',
    src: './../../../assets/songs/Indigo night .m4a',
    cover: '',
  },
  {
    position: 8,
    name: 'Habibi ',
    role: 'vocal',
    duration: '5:12',
    album: '',
    src: './../../../assets/songs/Habibi .m4a',
    cover: '',
  },
  {
    position: 1,
    name: 'Restless of love',
    role: 'performance',
    album: '',
    duration: '7:19',
    src: './../../../assets/songs/Restless of love.mp3',
    cover: '',
  },
  {
    position: 2,
    name: 'Dashti ( Do zarbi )',
    role: 'performance',
    album: '',
    duration: '3:40',
    src: './../../../assets/songs/Dashti ( Do zarbi ).m4a',
    cover: '',
  },
  {
    position: 3,
    name: 'cheshmeye noosh',
    role: 'performance',
    album: '',
    duration: '7:53',
    src: './../../../assets/songs/cheshmeye noosh.mp3',
    cover: '',
  },
  {
    position: 4,
    name: 'shooshtari atr afshan',
    role: 'performance',
    album: '',
    duration: '7:04',
    src: './../../../assets/songs/shooshtari atr afshan.mp3',
    cover: '',
  },
  {
    position: 5,
    name: 'Abuata( Ostad Jalil Shahnaz )',
    role: 'performance',
    album: '',
    duration: '5:03',
    src: './../../../assets/songs/Abuata( Ostad Jalil Shahnaz ).m4a',
    cover: '',
  },
  {
    position: 1,
    name: 'Eclipse',
    role: 'electric',
    album: 'The light',
    duration: '5:47',
    src: './../../../assets/songs/Eclipse.mp3',
    cover: './../../../assets/images/The Light album cover.jpg',
  },
  {
    position: 2,
    name: 'Flow',
    role: 'electric',
    album: 'The light',
    duration: '6:10',
    src: './../../../assets/songs/Flow.mp3',
    cover: './../../../assets/images/The Light album cover.jpg',
  },
  {
    position: 3,
    name: 'Spark',
    role: 'electric',
    album: 'The light',
    duration: '5:17',
    src: './../../../assets/songs/Spark.mp3',
    cover: './../../../assets/images/The Light album cover.jpg',
  },
  {
    position: 4,
    name: 'Vision',
    role: 'electric',
    album: 'The light',
    duration: '3:30',
    src: './../../../assets/songs/Vision.mp3',
    cover: './../../../assets/images/The Light album cover.jpg',
  },
];

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [
    MatButtonModule,
    MatProgressBarModule,
    MatSliderModule,
    FormsModule,
    MatTableModule,
    AsyncPipe,
],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss',
})
export class MusicPlayerComponent {
  displayedColumns: string[] = ['position', 'name', 'duration'];
  electricDisplayedColumns : string[] = ['position', 'name', 'album' ,'duration'];

isPlaying = false;
onPlay() {
  this.isPlaying = true;
}
onPause() {
  this.isPlaying = false;
}

  performances = musics.filter(m=> m.role == 'performance');
  vocals = musics.filter(m=> m.role == 'vocal')
  electrics = musics.filter(m=> m.role == 'electric')

  selectedItem: musicList =   {
    position: 1,
    name: 'Eclipse',
    role: 'electric',
    album: 'The light',
    duration: '5:47',
    src: './../../../assets/songs/Eclipse.mp3',
    cover: './../../../assets/images/The Light album cover.jpg',
  };

  select(selected: musicList) {
    this.selectedItem = {
      name: selected.name,
      role: selected.role,
      position: selected.position,
      album: selected.album,
      duration: selected.duration,
      src: selected.src,
      cover: selected.cover,
    };
    this.isPlaying = true
  }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
