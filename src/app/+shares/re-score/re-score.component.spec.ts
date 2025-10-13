import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReScoreComponent } from './re-score.component';

describe('ReScoreComponent', () => {
  let component: ReScoreComponent;
  let fixture: ComponentFixture<ReScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
