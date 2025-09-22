import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCard, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'app-awrads',
  standalone: true,
  imports: [MatIconModule, MatCard, MatCardContent],
  templateUrl: './awrads.component.html',
  styleUrl: './awrads.component.scss',
})
export class AwradsComponent {}
