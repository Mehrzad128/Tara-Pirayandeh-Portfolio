import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
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
}

const ELEMENT_DATA: musicList[] = [
  {position: 1, name: 'Hydrogen', duration: '1:28' , src:''},
  {position: 2, name: 'Helium'  , duration: '1:28', src:''},
  {position: 3, name: 'Lithium' , duration: '1:18', src:''},
  {position: 4, name: 'Beryllium' , duration: '1:51', src:''},
  {position: 5, name: 'Boron', duration: '1:10', src:''},
  {position: 6, name: 'Carbon' , duration: '3:10', src:''},
  {position: 7, name: 'Nitrogen', duration: '4:11', src:''},
  {position: 8, name: 'Oxygen' , duration: '5:00', src:''},
  {position: 9, name: 'Fluorine' , duration: '1:11', src:''},
  {position: 10, name: 'Neon' , duration: '1:28', src:''},
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
  isPlaying : boolean = false
  sliderValue : number = 100 ;
  
  play(){
    this.isPlaying = !this.isPlaying ;
  }

  displayedColumns: string[] = ['position', 'name', 'duration'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<musicList>();
  selectedItem : musicList = {
    name : 'Hydrogen',
    position : 1,
    duration : '1:28',
    src:''
  }

  select(selected : musicList){
    this.selectedItem = {
      name : selected.name ,
      position : selected.position,
      duration : selected.duration,
      src : selected.src
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


