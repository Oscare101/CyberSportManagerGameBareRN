import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import globalStyles from '../constants/globalStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../redux';
import colors from '../constants/colors';
import CardsBlock from '../components/main/CardsBlock';
import TeamCard from '../components/main/TeamCard';
import VerticalMainCard from '../components/main/VerticalMainCard';
import SecondaryButtonCard from '../components/main/SecondaryButtonCard';
import text from '../constants/text';

const width = Dimensions.get('screen').width;

export default function MainScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <CardsBlock>
        <TeamCard />
        <View style={{width: width * 0.015}} />
        <VerticalMainCard>
          <SecondaryButtonCard
            title={text.Practice}
            icon=""
            action={() => {
              navigation.navigate('SettingsScreen');
            }}
          />
          <View style={{height: width * 0.015}} />
          <SecondaryButtonCard
            title={text.GlobalRating}
            icon=""
            action={() => {}}
          />
        </VerticalMainCard>
      </CardsBlock>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
