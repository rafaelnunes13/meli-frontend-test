import { getDecimals } from './utils';

describe('utils.spec | Utils', () => {
  it('should count the decimals for the given value', () => {
    expect(getDecimals(null)).toEqual(0);
    expect(getDecimals(undefined)).toEqual(0);
    expect(getDecimals(1)).toEqual(0);
    expect(getDecimals(1.2)).toEqual(2);
    expect(getDecimals(1.23)).toEqual(23);
    expect(getDecimals(1.234)).toEqual(234);
  });
});
