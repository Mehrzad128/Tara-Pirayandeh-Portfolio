import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-re-score',
  standalone: true,
  imports: [ MatTabsModule, MatCard, MatCardTitle, MatCardSubtitle, MatIcon],
  templateUrl: './re-score.component.html',
  styleUrl: './re-score.component.scss',
})
export class ReScoreComponent {
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}
