import { VoterComponent } from './voter.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    fixture = TestBed.createComponent(VoterComponent);

    component = fixture.componentInstance;
  });

  it('Should render totalVotes', () => {
    component.othersVote = 20;
    component.myVote = 1;

    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.vote-count'));
    const el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');
  });

  it('Should highlight the upvote button if it is upVoted', () => {
    component.myVote = 1;

    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    // or can just selecting '.highlighted' directly which will return true or false

    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('Should increase totalVotes when upVoted is clicked', () => {
    const upVoteBtn = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    upVoteBtn.triggerEventHandler('click', null);

    expect(component.totalVotes).toBe(1);
  });
});
