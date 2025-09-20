import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePost } from './one-post';

describe('OnePost', () => {
  let component: OnePost;
  let fixture: ComponentFixture<OnePost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnePost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
