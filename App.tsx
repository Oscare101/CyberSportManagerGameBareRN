import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './app/navigation/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import AppComponent from './app/components/AppComponent';

export default function App() {
  return (
    <Provider store={store}>
      <AppComponent />
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
