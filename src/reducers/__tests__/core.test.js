import coreReducers, { setVenueId, getVenueId } from '../core';


describe('reducers', () => {

    describe('venueId', () => {
        it('action', () => {
            expect(setVenueId('testVenue')).toEqual({
                type: 'SET_VENUE_ID',
                payload: 'testVenue'
            });
        });

        it('selector', () => {
            expect(getVenueId({ venueId: 'testVenue' })).toEqual('testVenue');
        });

        it('reducer', () => {
            expect(coreReducers.venueId({}, setVenueId('testVenue'))).toEqual('testVenue');
        });
    });

});
