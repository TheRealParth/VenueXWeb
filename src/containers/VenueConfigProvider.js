import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { FoldingCube } from 'styled-spinkit';
import reactHOC from 'react-hoc';

import { getVenueId, firebaseGet } from '../reducers/core';
import Screen from '../components/Screen';


export const VenueConfig = React.createContext();

export const withVenueConfig = reactHOC(WrappedComponent => props => (
    <VenueConfig.Consumer>
        {venueConfig => <WrappedComponent venueConfig={venueConfig} {...props} />}
    </VenueConfig.Consumer>
), 'withVenueConfig');


const VenueConfigProvider = ({ venueConfig, venueId, children }) => {
    if (!isLoaded(venueConfig)) {
        return <Screen><FoldingCube /></Screen>;
    }

    if (isEmpty(venueConfig)) {
        return (
            <Screen>
                <h2>Aw, snap! Venue config was not found :(</h2>
                <div>Please double-check your venue ID (&quot;{venueId}&quot;)</div>
            </Screen>
        );
    }

    return (
        <VenueConfig.Provider value={{ id: venueId, ...venueConfig }}>
            {children}
        </VenueConfig.Provider>
    );
};

export default compose(
    firebaseConnect((props, store) => [
        `venues/${getVenueId(store.getState())}`
    ]),
    connect(state => ({
        venueId: getVenueId(state),
        venueConfig: firebaseGet(state, `data/venues/${getVenueId(state)}`)
    }))
)(VenueConfigProvider);


export const __forTesting = { VenueConfigProvider };
