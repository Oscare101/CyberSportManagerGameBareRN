import {
  Dimensions,
  SafeAreaView,
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
            title={text.Finances}
            icon="wallet"
            action={() => {
              navigation.navigate('FinancesScreen');
            }}
          />
          <View style={{height: width * 0.015}} />
          <SecondaryButtonCard
            title={text.GlobalRating}
            icon="halfStar"
            action={() => {
              navigation.navigate('RatingScreen');
            }}
          />
        </VerticalMainCard>
      </CardsBlock>
      {/* <CardsBlock title={text.Tournaments}>
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
      </CardsBlock> */}
      <Text
        style={{
          color: colors[themeColor].greys[2],
          fontSize: width * 0.05,
          marginVertical: width * 0.015,
        }}>
        {text.Tournaments}
      </Text>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '92%',
          backgroundColor: colors[themeColor].card,
          borderRadius: width * 0.03,
          paddingBottom: width * 0.015,
          height: width * 0.33,
        }}>
        <TournamentCard />
        <View
          style={[
            globalStyles.rowBetween,
            {paddingHorizontal: width * 0.015, height: width * 0.08},
          ]}>
          <SecondaryButtonCard
            title={text.Season}
            icon="practice"
            iconViewNumber={tournaments[tournaments.length - 1].season}
            action={() => {
              navigation.navigate('SeasonScreen', {
                season: tournaments[tournaments.length - 1].season,
              });
            }}
          />
          <View style={{width: width * 0.015}} />
          <SecondaryButtonCard
            title={text.Archived}
            icon="archive"
            action={() => {
              navigation.navigate('ArchiveTournamentsScreen');
            }}
          />
        </View>
      </View>
      <CardsBlock title={text.More}>
        <VerticalMainCard>
          <SecondaryButtonCard
            title={text.Settings}
            icon="settings"
            action={() => {
              navigation.navigate('SettingsScreen');
            }}
          />
        </VerticalMainCard>
        <View style={{width: width * 0.015}} />
        <TransferCard />
      </CardsBlock>
    </SafeAreaView>
  );
}
