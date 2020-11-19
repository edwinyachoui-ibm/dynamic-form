import * as fromLoader from './loader.actions';

describe('loadLoaders', () => {
  it('should return an action', () => {
    expect(fromLoader.showLoader().type).toBe('[Loader] Show Loader');
  });
  it('should return an action', () => {
    expect(fromLoader.hideLoader().type).toBe('[Loader] Hide Loader');
  });
});
