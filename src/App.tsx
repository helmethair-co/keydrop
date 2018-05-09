import * as React from 'react';
import { Provider } from 'react-redux';
import { View, Text, StatusBar, Platform, TouchableWithoutFeedback } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './reducers/index';
import { HomeScreenContainer } from './containers/HomeScreenContainer';
import { HeaderTitleContainer } from './containers/HeaderTitleContainer';

export default class App extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <HeaderTitleContainer/>
                    <HomeScreenContainer/>
                </PersistGate>
            </Provider>
        );
    }
}
