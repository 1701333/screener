import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubControllerComponent } from './git-hub-controller.component';

describe('GitHubControllerComponent', () => {
  let component: GitHubControllerComponent;
  let fixture: ComponentFixture<GitHubControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
