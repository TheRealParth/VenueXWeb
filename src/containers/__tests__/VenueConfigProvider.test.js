import React from 'react';
import { shallow, mount } from 'enzyme';

import { __forTesting, withVenueConfig } from '../VenueConfigProvider';

const { VenueConfigProvider } = __forTesting;


const Child = withVenueConfig(({ venueConfig }) => <div>{JSON.stringify(venueConfig)}</div>);
const venueConfig = { name: 'Test Venue', theme: { colors: { primary: '#f0f0f0' } } };

describe('VenueConfigProvider', () => {

    it('config not loaded', () => {
        expect(shallow((
            <VenueConfigProvider venueConfig={undefined} venueId="test_venue">
                <Child />
            </VenueConfigProvider>
        ))).toMatchSnapshot();
    });

    it('empty config', () => {
        expect(shallow((
            <VenueConfigProvider venueConfig={null} venueId="test_venue">
                <Child />
            </VenueConfigProvider>
        ))).toMatchSnapshot();
    });

    it('loaded config', () => {
        expect(shallow((
            <VenueConfigProvider venueConfig={venueConfig} venueId="test_venue">
                <Child />
            </VenueConfigProvider>
        ))).toMatchSnapshot();
    });

    it('withVenueConfig', () => {
        expect(mount((
            <VenueConfigProvider venueConfig={venueConfig} venueId="test_venue">
                <Child />
            </VenueConfigProvider>
        )).find('div')).toMatchSnapshot();
    });
});
