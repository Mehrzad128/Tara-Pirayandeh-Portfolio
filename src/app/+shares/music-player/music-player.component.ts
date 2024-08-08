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

export interface PeriodicElement {
  name: string;
  position: number;
  duration: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', duration: '1:28'},
  {position: 2, name: 'Helium'  , duration: '1:28'},
  {position: 3, name: 'Lithium' , duration: '1:18'},
  {position: 4, name: 'Beryllium' , duration: '1:51'},
  {position: 5, name: 'Boron', duration: '1:10'},
  {position: 6, name: 'Carbon' , duration: '3:10'},
  {position: 7, name: 'Nitrogen', duration: '4:11'},
  {position: 8, name: 'Oxygen' , duration: '5:00'},
  {position: 9, name: 'Fluorine' , duration: '1:11'},
  {position: 10, name: 'Neon' , duration: '1:28'},
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
  clickedRows = new Set<PeriodicElement>();
  selectedItem : PeriodicElement = {
    name : 'Hydrogen',
    position : 1,
    duration : '1:28'
  }

  select(selected : PeriodicElement){
    this.selectedItem = {
      name : selected.name ,
      position : selected.position,
      duration : selected.duration
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


