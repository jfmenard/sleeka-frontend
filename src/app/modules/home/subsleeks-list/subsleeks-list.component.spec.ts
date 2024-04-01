import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSleeksListComponent } from './subsleeks-list.component';

describe('SubSleeksListComponent', () => {
  let component: SubSleeksListComponent;
  let fixture: ComponentFixture<SubSleeksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubSleeksListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubSleeksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
