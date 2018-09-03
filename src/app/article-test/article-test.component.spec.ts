import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTestComponent } from './article-test.component';

describe('ArticleTestComponent', () => {
  let component: ArticleTestComponent;
  let fixture: ComponentFixture<ArticleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
