const index = require('../src/index.js');
const $ = require('jquery');
import PoliticaCookiesController from '../src/controllers/PoliticaCookiesCtrl';

jest.mock('../src/controllers/PoliticaCookiesCtrl'); // HomeController is now a mock constructor

beforeEach(() => {
    PoliticaCookiesController.mockClear();
});


it('We can check if the HomeController can be called', () => {
    const cookies = new PoliticaCookiesController();
    expect(PoliticaCookiesController).toHaveBeenCalledTimes(1);
});