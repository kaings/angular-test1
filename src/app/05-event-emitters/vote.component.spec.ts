import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged eventEmitter when upVoted', () => {
    let ttlVotes = null;

    component.voteChanged.subscribe(
      event => ttlVotes = event
    );

    component.upVote();

    expect(ttlVotes).toBe(1);
  });
});
