import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwradsComponent } from './awrads.component';

describe('AwradsComponent', () => {
  let component: AwradsComponent;
  let fixture: ComponentFixture<AwradsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwradsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwradsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
