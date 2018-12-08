import urlToVenueId from '../urlToVenueId';


describe('utils/urlToVenueId', () => {

  it('urlToVenueId', () => {
    expect(urlToVenueId('https://www.theblaisdell.com/')).toEqual('theblaisdell_com');
    expect(urlToVenueId('www.theblaisdell.com')).toEqual('theblaisdell_com');
    expect(urlToVenueId('theblaisdell.com')).toEqual('theblaisdell_com');
    expect(urlToVenueId('the-blaisdell.com')).toEqual('the_blaisdell_com');
  });

});
