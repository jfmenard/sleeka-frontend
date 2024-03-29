import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SublkeeksListComponent } from './sublkeeks-list.component';

describe('SublkeeksListComponent', () => {
  let component: SublkeeksListComponent;
  let fixture: ComponentFixture<SublkeeksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SublkeeksListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SublkeeksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
