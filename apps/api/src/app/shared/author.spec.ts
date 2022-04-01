import { AUTHOR } from './author';

describe('author.spec | AUTHOR', () => {
  it('should return the author', () => {
    expect(AUTHOR).toEqual({ name: 'Rafael', lastname: 'Nunes' });
  });
});
