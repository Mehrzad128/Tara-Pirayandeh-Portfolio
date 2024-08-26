import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.scss'
})
export class BiographyComponent {

}
