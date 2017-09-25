import { TruckAdminPage } from './app.po';

describe('truck-admin App', () => {
  let page: TruckAdminPage;

  beforeEach(() => {
    page = new TruckAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
