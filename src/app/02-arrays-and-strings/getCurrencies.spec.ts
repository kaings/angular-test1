import {getCurrencies} from './getCurrencies';

describe('getCurrencies', () => {
  it('to include AUD, USD, EUR', () => {
    expect(getCurrencies()).toContain('AUD');
    expect(getCurrencies()).toContain('USD');
    expect(getCurrencies()).toContain('EUR');
  });
});
