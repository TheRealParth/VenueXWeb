import React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';

import { __forTesting } from '../VenueThemeProvider';

const { VenueThemeProvider } = __forTesting;


const Child = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
`;

const venueConfig = { theme: { colors: { primary: '#f0f0f0' } } };


it('VenueThemeProvider', () => {
    expect(mount((
        <VenueThemeProvider venueConfig={venueConfig}>
            <Child />
        </VenueThemeProvider>
    )).find('div')).toMatchSnapshot();
});
