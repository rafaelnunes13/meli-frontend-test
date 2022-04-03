import { addTrailingZero } from './utils';

describe('utils.spec | Utils', () => {
  it('should add trailing zeros to numbers below 10', () => {
    expect(addTrailingZero(0)).toEqual('00');
    expect(addTrailingZero(1)).toEqual('10');
    expect(addTrailingZero(2)).toEqual('20');
    expect(addTrailingZero(9)).toEqual('90');
    expect(addTrailingZero(21)).toEqual('21');
  })
});
