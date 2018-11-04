import {compute} from './compute';

describe('compute', () => {
  it('return 0 if input is less than 0', () => {
    expect(compute(-1)).toBe(0);
  });

  it('return increment of 1 if input is equal to or more than 0', () => {
    expect(compute(0)).toBe(1);
  });
});
