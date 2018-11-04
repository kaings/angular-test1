import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let voteComponent: VoteComponent;

  beforeEach(() => {
    voteComponent = new VoteComponent();
  });

  it('should increment totalVotes when upVoted', () => {
    voteComponent.upVote();
    expect(voteComponent.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downVoted', () => {
    voteComponent.downVote();
    expect(voteComponent.totalVotes).toBe(-1);
  });
});
