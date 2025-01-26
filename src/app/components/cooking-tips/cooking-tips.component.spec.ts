import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingTipsComponent } from './cooking-tips.component';

describe('CookingTipsComponent', () => {
  let component: CookingTipsComponent;
  let fixture: ComponentFixture<CookingTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookingTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
