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

const vocals: musicList[] = [
  {position: 1, name: 'Hydrogen', duration: '3:24' , src:'./../../../assets/Imagine Dragons - Believer [320].mp3' , cover:''},
  {position: 2, name: 'Helium'  , duration: '3:37', src:'./../../../assets/music-player_music_summer.mp3', cover:''},
  {position: 3, name: 'Lithium' , duration: '2:26', src:'./../../../assets/music-player_music_ukulele.mp3', cover:''},
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

@ViewChild('audio') audio? : ElementRef<HTMLAudioElement>;

  isPlaying : boolean = false
  sliderValue : number = 100 ;
  volume: number = this.sliderValue/100;
  
  
  play(){
    this.isPlaying = true ;
    this.audio?.nativeElement.play();
    if(this.audio){
      console.log(this.audio.nativeElement.duration);
    }
  }

  pause(){
    this.isPlaying = false ;
    this.audio?.nativeElement.pause();
}

  mute(){
    if(this.audio){
      this.audio.nativeElement.volume = 0;
    }
    else {
      console.log('error');
    }
    this.sliderValue = 0;
  }

  next(){
    
  }

  prev(){
    
  }

  displayedColumns: string[] = ['position', 'name', 'duration'];
  dataSource = vocals;
  clickedRows = new Set<musicList>();
  selectedItem : musicList = {
    name : 'Hydrogen',
    position : 1,
    duration : '1:28',
    src:'./../../../assets/Imagine Dragons - Believer [320].mp3',
    cover:''
  }

  select(selected : musicList){
    this.selectedItem = {
      name : selected.name ,
      position : selected.position,
      duration : selected.duration,
      src : selected.src,
      cover: selected.cover
    }
    this.isPlaying = false;
  }

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map((result) => result.matches),
    shareReplay()
  );
  
}


