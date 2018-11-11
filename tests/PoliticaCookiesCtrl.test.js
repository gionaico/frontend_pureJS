const index = require('../src/index.js');
const $ = require('jquery');
import PoliticaCookiesController from '../src/component/PoliticaCookies.component';

jest.mock('../src/component/PoliticaCookies.component'); // HomeController is now a mock constructor

beforeEach(() => {
    PoliticaCookiesController.mockClear();
});


it('We can check if the HomeController can be called', () => {
    const cookies = new PoliticaCookiesController();
    expect(PoliticaCookiesController).toHaveBeenCalledTimes(1);
});