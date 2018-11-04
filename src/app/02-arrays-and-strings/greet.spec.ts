import {greet} from './greet';

describe('greet', () => {
  it('it should return the input name', () => {
    expect(greet('Will')).toContain('Will');
  });
});
