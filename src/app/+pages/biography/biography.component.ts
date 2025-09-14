import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.scss',
})
export class BiographyComponent {}
