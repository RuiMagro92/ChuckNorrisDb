import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomJokeComponent } from './custom-joke.component';

describe('CustomJokeComponent', () => {
  let component: CustomJokeComponent;
  let fixture: ComponentFixture<CustomJokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomJokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
