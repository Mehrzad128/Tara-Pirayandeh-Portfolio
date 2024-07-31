import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  album:string;
  role: string;
  duration: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', album:"Demo one" , role: "Singer", duration: '1:28'},
  {position: 2, name: 'Helium' , album:"Demo one" , role: "Singer", duration: '1:28'},
  {position: 3, name: 'Lithium' , album:"Demo one" , role: "musician", duration: '1:18'},
  {position: 4, name: 'Beryllium' , album:"Demo one" ,  role: "Singer", duration: '1:51'},
  {position: 5, name: 'Boron' , album:"Demo one" , role: "musician", duration: '1:10'},
  {position: 6, name: 'Carbon' , album:"Demo one" ,  role: "Singer", duration: '3:10'},
  {position: 7, name: 'Nitrogen' , album:"Demo one" , role: "musician", duration: '4:11'},
  {position: 8, name: 'Oxygen' , album:"Demo one" ,  role: "Singer", duration: '5:00'},
  {position: 9, name: 'Fluorine' , album:"Demo one" ,  role: "Singer", duration: '1:11'},
  {position: 10, name: 'Neon' , album:"Demo one" , role: "musician", duration: '1:28'},
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
    MatTableModule
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

  displayedColumns: string[] = ['position', 'name', 'album' , 'role', 'duration'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  selectedItem : PeriodicElement = {
    name : 'Hydrogen',
    position : 1,
    album : 'Demo one' ,
    role : 'Singer' ,
    duration : '1:28'
  }

  select(selected : PeriodicElement){
    this.selectedItem = {
      name : selected.name ,
      position : selected.position,
      album : selected.album,
      role : selected.role,
      duration : selected.duration
    }
  }

}


