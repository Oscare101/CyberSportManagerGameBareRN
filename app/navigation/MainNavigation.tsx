import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import LaunchScreen from '../screens/LaunchScreen';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

export default function MainNavigation() {
  const navigationLogIn = (
    <Stack.Navigator initialRouteName="LaunchScreen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="LaunchScreen"
        component={LaunchScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          headerLeft: () => null,
        }}
        name="MainScreen"
        component={MainScreen}
      />
      {/* other screens then must apear without bottom tab navigation */}
      {/* <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TournamentScreen"
        component={TournamentScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ArchivedTournamentsScreen"
        component={ArchivedTournamentsScreen}
      /> */}
    </Stack.Navigator>
  );

  return <>{navigationLogIn}</>;
}
