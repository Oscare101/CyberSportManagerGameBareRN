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
import TournamentCard from '../components/main/TournamentCard';
import {Tournament} from '../constants/interfaces/tournamentInterfaces';
import TransferCard from '../components/main/TransferCard';

const width = Dimensions.get('screen').width;

export default function MainScreen({navigation}: any) {
  const systemTheme = useColorScheme();
  const theme = useSelector((state: RootState) => state.theme);
  const themeColor: any = theme === 'system' ? systemTheme : theme;
  const tournaments: Tournament[] = useSelector(
    (state: RootState) => state.tournaments,
  );

  return (
    <SafeAreaView
      style={[
        globalStyles.container,
        {backgroundColor: colors[themeColor].bg},
      ]}>
      <CardsBlock title={text.YourTeam}>
        <TeamCard />
        <View style={{width: width * 0.015}} />
        <VerticalMainCard>
          <SecondaryButtonCard
            title={text.Practice}
            icon="practice"
            action={() => {}}
          />
          <View style={{height: width * 0.015}} />
          <SecondaryButtonCard
            title={text.GlobalRating}
            icon="halfStar"
            action={() => {}}
          />
        </VerticalMainCard>
      </CardsBlock>
      <CardsBlock title={text.Tournaments}>
        <TournamentCard />
        <View style={{width: width * 0.015}} />
        <VerticalMainCard>
          <SecondaryButtonCard
            title={text.Season}
            icon="practice"
            iconViewNumber={tournaments[tournaments.length - 1].season}
            action={() => {}}
          />
          <View style={{height: width * 0.015}} />
          <SecondaryButtonCard
            title={text.Archived}
            icon="archive"
            action={() => {}}
          />
        </VerticalMainCard>
      </CardsBlock>
      <CardsBlock title={text.More}>
        <VerticalMainCard>
          <SecondaryButtonCard
            title={text.Settings}
            icon="settings"
            action={() => {}}
          />
        </VerticalMainCard>
        <View style={{width: width * 0.015}} />
        <TransferCard />
      </CardsBlock>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
