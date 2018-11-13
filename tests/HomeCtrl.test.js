const index = require('../src/index.js');
const $ = require('jquery');
import HomeController from '../src/component/Home.component';

jest.mock('../src/component/Home.component'); // HomeController is now a mock constructor

beforeEach(() => {
    HomeController.mockClear();
});


it('We can check if the HomeController can be called', () => {
    const home = new HomeController();
    expect(HomeController).toHaveBeenCalledTimes(1);
});