import { ComponentEncapsulationPage } from './app.po';

describe('component-encapsulation App', function() {
  let page: ComponentEncapsulationPage;

  beforeEach(() => {
    page = new ComponentEncapsulationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
