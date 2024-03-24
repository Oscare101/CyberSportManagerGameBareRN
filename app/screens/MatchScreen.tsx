import {Alert, BackHandler, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

export default function MatchScreen({navigation, route}: any) {
  console.log(route.params);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Попередження', 'Ви дійсно хочете вийти?', [
        {
          text: 'Скасувати',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Так', onPress: () => navigation.goBack()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View>
      <Text>MatchScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
