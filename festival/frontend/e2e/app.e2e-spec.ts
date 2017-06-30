import { ScienceFestivalPage } from './app.po';

describe('science-festival App', () => {
  let page: ScienceFestivalPage;

  beforeEach(() => {
    page = new ScienceFestivalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
