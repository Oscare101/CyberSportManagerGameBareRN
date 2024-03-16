import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './app/navigation/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import AppComponent from './app/components/AppComponent';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppComponent />
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}
